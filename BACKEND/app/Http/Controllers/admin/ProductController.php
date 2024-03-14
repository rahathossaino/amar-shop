<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\ProductImage;
use App\Models\admin\Product;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;


class ProductController extends Controller
{
    public function index(){
        try{
            $products=Product::select('products.*','categories.name as category_name','subcategories.name as subcategory_name')
                        ->leftJoin('categories','categories.id','products.category_id')
                        ->leftJoin('subcategories','subcategories.id','products.subcategory_id')
                        ->leftJoin('brands','brands.id','products.brand_id')
                        ->where('status',1);
            return response()->json([
                'products'=>$products
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ],404);
        }
    }
    public function store(Request $request){
        try {
            $rules=[
                'title'=>'required|string',
                'slug'=>'required|unique:products',
                'short_description'=>'required|string',
                'description'=>'required|string',
                'category_id'=>'required',
                'sub_category_id'=>'required',
                'brand_id'=>'required',
                'price'=>'required|numeric',
                'sku'=>'required'
            ];
            if(!empty($request->track_qty) && $request->track_qty=='yes'){
                $rules['qty']='required|numeric';
            }
            $validator=Validator::make($request->all(),$rules);
            if($validator->passes()){
                $product=new Product();
                $product->title=$request->title;
                $product->slug=$request->slug;
                $product->short_description=$request->short_description;
                $product->description=$request->description;
                $product->category_id=$request->category_id;
                $product->sub_category_id=$request->sub_category_id;
                $product->brand_id=$request->brand_id;
                $product->price=$request->price;
                $product->sku=$request->sku;
                $product->track_qty=$request->track_qty;
                if(!empty($request->qty)){
                    $product->qty=$request->qty;
                }
                //event for image processing
                $product->save();
                return response()->json([
                    'message'=>'Product added successfully'
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
            $product=Product::find($id);
            if(empty($product)){
                return response()->json([
                    'message'=>"Product Doesn't exist"
                ],404);
            }
            $productImages=ProductImage::where('product_id',$id)->get();
            foreach ($productImages as $productImage){
                if(file_exists($productImage)){
                    File::delete($productImage);
                }
            }
            $product->delete();
            return response()->json([
                'message'=>"Product deleted successfully"
            ],200);
        }catch (\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
}
