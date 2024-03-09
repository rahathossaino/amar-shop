<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\SubCategory;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;


class SubCategoryController extends Controller
{
    public function index(){
        try{
            $subcategories=SubCategory::select('sub_categories.*','categories.name as categoryName')
                            ->leftJoin('categories','categories.id','sub_categories.category_id')
                            ->where('status',1)->get();
            return response()->json([
                'subcategories'=>$subcategories
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
                'slug'=>'required|unique:sub_categories',
                'image'=>'required'
            ]);

            if($validator->passes()){
                $subcategory=new SubCategory();
                $subcategory->name=$request->name;
                $subcategory->slug=$request->slug;
                $subcategory->save();
                if(!empty($request->image)){
                    $image=$request->image;
                    $ext=$image->getOriginalExtension();
                    $newImage=$subcategory->id.'-'.time().'.'.$ext;
                    $image->move(public_path().'/upload/subcategory/',$newImage);
                    $subcategory->image=public_path().'/upload/subcategory/'.$image;
                    $subcategory->save();
                }
                return response()->json([
                    'message'=>'Sub-Category added successfully'
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
            $subcategory=SubCategory::find($id);
            if(empty($subcategory)){
                return response()->json([
                    'message'=>"Sub-Category Doesn't exist"
                ],404);
            }
            if(file_exists($subcategory->image)){
                File::delete($subcategory->image);
            }
            $subcategory->delete();
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
