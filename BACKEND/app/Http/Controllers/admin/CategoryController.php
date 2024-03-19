<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\admin\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function index(){
        try{
            $categories=Category::orderBy('name','ASC')->where('status',1)->get();
            return response()->json([
                'categories'=> $categories
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
                'slug'=>'required|unique:categories',
            ]);

            if($validator->passes()){
                $category=new Category();
                $category->name=$request->name;
                $category->slug=$request->slug;
                $category->save();
                return response()->json([
                    'message'=>'Category added successfully'
                ],200);
            }else{
                return response()->json([
                    'errors'=>$validator->errors()
                ],400);
            }
        }catch (\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again! subcategory'
            ]);
        }
    }
    public function destroy($id){
        try{
            $category=Category::find($id);
            if(empty($category)){
                return response()->json([
                    'message'=>"Sub-Category Doesn't exist"
                ],404);
            }

            $category->delete();
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
