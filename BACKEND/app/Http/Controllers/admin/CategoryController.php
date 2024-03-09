<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\admin\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use App\Models\admin\Category;
use Intervention\Image\Facades\Image;

class CategoryController extends Controller
{
    public function index(){
        try{
            $categories=Category::where('status',1)->get();
            return response()->json([
                'categories'=>$categories
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
//                'image'=>'required'
            ]);

            if($validator->passes()){
                $category=new Category();
                $category->name=$request->name;
                $category->slug=$request->slug;
                $category->save();
                if(!empty($request->image)){
                    $image=$request->image;
                    $ext=$image->getOriginalExtension();
                    $newImage=$category->id.'-'.time().'.'.$ext;
                    $image->move(public_path().'/upload/category/',$newImage);
                    $category->image=public_path().'/upload/category/'.$image;
                    $category->save();
                }
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
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
    public function destroy($id){
        try{
            $category=Category::find($id);
            if(empty($category)){
                return response()->json([
                    'message'=>"Category Doesn't exist"
                ],404);
            }
            if(file_exists($category->image)){
                File::delete($category->image);
            }
            $category->delete();
            return response()->json([
                'message'=>"Category deleted successfully"
            ],200);
        }catch (\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
    public function getSubCategory($id){
        try{
            $subcategories=SubCategory::where('category_id',$id)->get();
            return response()->json([
                'subcategories'=>empty($subcategories) ? [] : $subcategories
            ],200);
        }catch (\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }

    }
}
