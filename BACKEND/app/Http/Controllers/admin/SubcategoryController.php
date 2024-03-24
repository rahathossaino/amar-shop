<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\admin\SubCategory;



class SubcategoryController extends Controller
{
    public function index(){
        try{
            $subcategories=SubCategory::select('subcategories.*','categories.name as category_name')
                            ->leftJoin('categories','categories.id','subcategories.category_id')
                            ->orderBy('id','ASC')->get();
            return response()->json([
                'subcategories'=> $subcategories
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'.$e
            ]);
        }
    }
    public function store(Request $request){
        try {
            $validator=Validator::make($request->all(),[
                'name'=>'required|string',
                'slug'=>'required|unique:subcategories',
                'category'=>'required'
            ]);

            if($validator->passes()){
                $subcategory=new SubCategory();
                $subcategory->name=$request->name;
                $subcategory->slug=$request->slug;
                $subcategory->category_id=$request->category;
                $subcategory->save();
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
                'error'=>'Something went wrong .Try again! subcategory'
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
    public function getSubcategory($id){
        try{
            $subcategories=SubCategory::orderBy('name','ASC')->where('category_id',$id)->get();
            return response()->json([
                'subcategories'=> $subcategories
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'.$e
            ]);
        }
    }
}
