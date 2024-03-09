<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\admin\Discount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;


class DiscountController extends Controller
{
    public function index(){
        try{
            $discounts=Discount::orderBy('name','ASC')->where('status',1)->get();
            return response()->json([
                'discounts'=>$discounts
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
                'discount_type'=>'required',
                'discount_amount'=>'required|numeric'
            ]);

            if($validator->passes()){
                $discount=new Discount();
                $discount->name=$request->name;
                $discount->discount_type=$request->discount_type;
                $discount->discount_amount=$request->discount_amount;
                if(!empty($discount->description)){
                    $discount->description=$request->description;
                }
                if(!empty($discount->max_uses)){
                    $discount->max_uses=$request->max_uses;
                }
                if(!empty($discount->max_user)){
                    $discount->max_user=$request->max_user;
                }
                if(!empty($discount->min_amount)){
                    $discount->min_amount=$request->min_amount;
                }
                if(!empty($discount->starts_at)){
                    $discount->starts_at=$request->starts_at;
                }
                if(!empty($discount->expires_at)){
                    $discount->expires_at=$request->expires_at;
                }
                $discount->save();
                return response()->json([
                    'message'=>'Discount added successfully'
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
            $discount=Discount::find($id);
            if(empty($discount)){
                return response()->json([
                    'message'=>"Discount Doesn't exist"
                ],404);
            }
            $discount->delete();
            return response()->json([
                'message'=>"Discount deleted successfully"
            ],200);
        }catch (\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }

}
