<?php

namespace App\Http\Controllers\admin;

use App\Jobs\AdminVerifyJob;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AdminAuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT token via given credentials.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if ($token = Auth::guard("admin")->attempt($credentials)) {
            $admin=Auth::guard("admin")->user();
             if($admin->role==2){
                 return $this->respondWithToken($token);
             }
            Auth::guard("admin")->logout();
        }

        return response()->json(['error' => 'Unauthorized'], 201);
    }

    /**
     * Get the authenticated User
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(Auth::guard('admin')->user());
    }

    /**
     * Log the user out (Invalidate the token)
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        Auth::guard("admin")->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function changePassword(Request $request){
        try{
            $user=Auth::guard('admin')->user();
            $validator=Validator::make($request->all(),[
                'old_password'=>'required',
                'new_password'=>'required|min:5',
                'confirm_password'=>'required|same:new_password',
            ]);
            if($validator->passes()) {
                if (Hash::check($request->old_password, $user->password)) {
                    $user->password = Hash::make($request->new_password);
                    $user->save();
                    return response()->json([
                        'message'=>"Password changed successfully"
                    ],200);
                }else{
                    return response()->json([
                        'error'=>"Password doesn't match"
                    ],401);
                }
            }else{
                return response()->json([
                    'errors'=>$validator->errors()
                ],400);
            }
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }

    public function sendResetLinkEmail(Request $request){
        try{
            $validator=Validator::make($request->all(),[
                'email'=>'required|email|exists:users,email'
            ]);
            if($validator->passes()) {
                $token=Str::random(7);
                DB::table('password_reset_tokens')->where('email',$request->email)->delete();
                DB::table('password_reset_tokens')->insert([
                    'email'=>$request->email,
                    'token'=>$token,
                    'created_at'=>now()
                ]);
                $user=Auth::guard('admin')->user();
                $data=[
                    'token'=>$token,
                    'email'=>$request->email,
                    'name'=>$user->first_name
                ];
                dispatch(new AdminVerifyJob($data));
                return response()->json([
                    'message'=>'Please check your email'
                ]);
            }else{
                return response()->json([
                    'errors'=>$validator->errors()
                ],400);
            }
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
    public function resetPasswordProcess(Request $request)
    {
        try{
            $request->validate([
                'email' => 'required|email',
                'password' => 'required|confirmed',
                'token' => 'required'
            ]);
            $tokenRecord = DB::table('password_reset_tokens')
                ->where('email', $request->email)
                ->where('token', $request->token)
                ->first();
            if (!$tokenRecord) {
                return response()->json(['message' => 'Invalid token'], 400);
            }
            DB::table('users')
                ->where('email', $request->email)
                ->update(['password' => Hash::make($request->password)]);
            DB::table('password_reset_tokens')
                ->where('email', $request->email)
                ->delete();
            return response()->json(['message' => 'Password reset successful'],200);
        }catch(\Exception $e){
            return response()->json(['error' => 'Something went wrong.Try again!'],404);
        }
    }

    public function resetPassword($token){
        $tokenRecord = DB::table('password_reset_tokens')
            ->where('token', $token)
            ->first();
    }
    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(Auth::guard('admin')->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::guard('admin')->factory()->getTTL() * 60,
            'user'=>Auth::guard('admin')->user(),
        ],200);
    }

    /**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\Guard
     */
    public function guard()
    {
        return Auth::guard('admin');
    }
}
