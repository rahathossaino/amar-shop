<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\admin\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;


class BrandController extends Controller
{
    public function index(){
        try{
            $brands=Brand::orderBy('name','ASC')->where('status',1)->get();
            return response()->json([
                'brands'=>$brands
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
                'slug'=>'required|unique:brands',
            ]);

            if($validator->passes()){
                $brands=new Brand();
                $brands->name=$request->name;
                $brands->slug=$request->slug;
                $brands->save();
                return response()->json([
                    'message'=>'Brand added successfully'
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
            $brand=Brand::find($id);
            if(empty($brand)){
                return response()->json([
                    'message'=>"Sub-Category Doesn't exist"
                ],404);
            }
            $brand->delete();
            return response()->json([
                'message'=>"Sub-Category deleted successfully"
            ],200);
        }catch (\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
}