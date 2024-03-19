<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\admin\Coupon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CouponController extends Controller
{
    public function index(){
        try{
            $coupons=Coupon::latest('id')->where('status',1)->get();
            return response()->json([
                'coupons'=>$coupons
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
    public function store(Request $request){
        try {
            $validator=Validator::make($request->all(),[
                'name'=>'required|string',
                'code'=>'required',
                'discount_type'=>'required',
                'discount_amount'=>'required|numeric'
            ]);

            if($validator->passes()){
                $discount=new Coupon();
                $discount->name=$request->name;
                $discount->code=$request->code;
                $discount->discount_type=$request->discount_type;
                $discount->discount_amount=$request->discount_amount;
                if(!empty($request->description)){
                    $discount->description=$request->description;
                }
                if(!empty($request->max_uses)){
                    $discount->max_uses=$request->max_uses;
                }
                if(!empty($request->max_user)){
                    $discount->max_user=$request->max_user;
                }
                if(!empty($discount->min_amount)){
                    $discount->min_amount=$request->min_amount;
                }
                if(!empty($request->starts_at)){
                    $discount->starts_at=$request->starts_at;
                }
                if(!empty($request->expires_at)){
                    $discount->expires_at=$request->expires_at;
                }
                $discount->save();
                return response()->json([
                    'message'=>'Coupon added successfully'
                ],200);
            }else{
                return response()->json([
                    'errors'=>$validator->errors()
                ],400);
            }
        }catch (\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
    public function destroy($id){
        try{
            $discount=Coupon::find($id);
            if(empty($discount)){
                return response()->json([
                    'message'=>"Coupon Doesn't exist"
                ],404);
            }
            $discount->delete();
            return response()->json([
                'message'=>"Coupon deleted successfully"
            ],200);
        }catch (\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
    public function singleCoupon($id){
        try{
            $discount=Coupon::find($id);
            if(empty($discount)){
                return response()->json([
                    'message'=>"Coupon Doesn't exist"
                ],404);
            }
            return response()->json([
                'coupon'=>$discount
            ],200);
        }catch (\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
}
