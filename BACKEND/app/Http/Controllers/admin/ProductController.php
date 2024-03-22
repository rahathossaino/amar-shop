<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\ProductImage;
use App\Models\admin\Product;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;


class ProductController extends Controller
{
    public function index(){
        try{
            $products=Product::select('products.*','categories.name as category_name','subcategories.name as subcategory','brands.name as brand')
                        ->leftJoin('categories','categories.id','products.category_id')
                        ->leftJoin('subcategories','subcategories.id','products.subcategory_id')
                        ->leftJoin('brands','brands.id','products.brand_id')
                        ->where('products.status',1)->get();
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
                'name'=>'required|string',
                'slug'=>'required|unique:products',
                'short_description'=>'required|string',
                'description'=>'required|string',
                'category'=>'required',
                'subcategory'=>'required',
                'brand'=>'required',
                'price'=>'required|numeric',
                'sku'=>'required',
                'images.*' => 'required|image|mimes:jpeg,png,jpg|max:7500'
            ];
            if(!empty($request->track_qty) && $request->track_qty=='yes'){
                $rules['qty']='required|numeric';
            }
            $validator=Validator::make($request->all(),$rules);
            if($validator->passes()){
                $product=new Product();
                $product->title=$request->name;
                $product->slug=$request->slug;
                $product->short_description=$request->short_description;
                $product->description=$request->description;
                $product->category_id=$request->category;
                $product->subcategory_id=$request->subcategory;
                $product->brand_id=$request->brand;
                $product->price=$request->price;
                $product->sku=$request->sku;
                $product->track_qty=$request->track_qty;
                if(!empty($request->qty)){
                    $product->qty=$request->qty;
                }
                if(!empty($request->price_of_day)){
                    $product->price_of_day=$request->price_of_day;
                }
                $product->save();
                foreach ($request->images as $image) {
                    $productImage=new ProductImage();
                    $productImage->product_id=$product->id;
                    $ext = $image->getClientOriginalExtension();
                    $newImage=$product->id.'-'.uniqid().'.'.$ext;
                    $image->move(public_path().'/upload/product/',$newImage);
                    $productImage->image='/upload/product/'.$newImage;
                    $productImage->save();
                }
                return response()->json([
                    'message'=>'Product added successfully'
                ],200);
            }else{
                return response()->json([
                    'errors'=>$validator->errors()
                ],422);
            }
        }catch (\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'.$e
            ],400);
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
    public function update(Request $request,$id){
        try {
            $rules=[
                'title'=>'required|string',
                'slug'=>'required',
                'short_description'=>'required|string',
                'description'=>'required|string',
                'category_id'=>'required',
                'subcategory_id'=>'required',
                'brand_id'=>'required',
                'price'=>'required|numeric',
                'sku'=>'required',
                'images.*' => 'required|image|mimes:jpeg,png,jpg|max:7500'
            ];
            if(!empty($request->track_qty) && $request->track_qty=='yes'){
                $rules['qty']='required|numeric';
            }
            $validator=Validator::make($request->all(),$rules);
            if($validator->passes()){
                $product=Product::find($id);
                if(empty($product)){
                    return response()->json([
                        'message'=>"Product Doesn't exist"
                    ],404);
                }
                $product->title=$request->title;
                $product->slug=$request->slug;
                $product->short_description=$request->short_description;
                $product->description=$request->description;
                $product->category_id=$request->category_id;
                $product->subcategory_id=$request->subcategory_id;
                $product->brand_id=$request->brand_id;
                $product->price=$request->price;
                $product->sku=$request->sku;
                $product->track_qty=$request->track_qty;
                $product->is_featured=$request->is_featured;
                if(empty($request->qty)){
                    $product->qty=$request->qty;
                }
                if($request->price_of_day!=='null'){
                    $product->price_of_day=$request->price_of_day;
                }
                $product->save();
                $productImages=ProductImage::where('product_id',$id)->get();
                if(!empty($request->images)){
                    if(!empty($productImages)){
                        foreach ($productImages as $productImage){
                            if(file_exists(public_path().$productImage->image)){
                                File::delete(public_path().$productImage->image);
                                Log::info(['inside'=>public_path().$productImage->image]);
                            }
                            Log::info(['outside'=>public_path().$productImage->image]);
                            $productImage->delete();
                        }
                    }
                    foreach ($request->images as $image) {
                        $productImage=new ProductImage();
                        $productImage->product_id=$product->id;
                        $ext = $image->getClientOriginalExtension();
                        $newImage=$product->id.'-'.uniqid().'.'.$ext;
                        $image->move(public_path().'/upload/product/',$newImage);
                        $productImage->image='/upload/product/'.$newImage;
                        $productImage->save();
                    }
                }
                return response()->json([
                    'message'=>'Product updated successfully'
                ],200);
            }else{
                return response()->json([
                    'errors'=>$validator->errors()
                ],422);
            }
        }catch (\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'.$e
            ],400);
        }
    }
    public function singleProduct($id){
        try{
            $product=Product::select('products.*','categories.name as category','subcategories.name as subcategory','brands.name as brand')
                             ->leftJoin('categories','categories.id','products.category_id')
                             ->leftJoin('subcategories','subcategories.id','products.subcategory_id')
                             ->leftJoin('brands','brands.id','products.brand_id')
                             ->where('products.id',$id)->with('product_images')->first();
            if(empty($product)){
                return response()->json([
                    'message'=>"Product Doesn't exist"
                ],404);
            }
            foreach ($product->product_images as $product_image){
                $path=public_path().$product_image->image;
                $product_image->image=base64_encode(File::get($path));
            }
            return response()->json([
                'product'=>$product
            ],200);
        }catch (\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'.$e
            ]);
        }
    }
    public function getSlug($name){
        try{
            $slug=Str::slug($name);
            return response()->json([
                'slug'=>$slug
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ],404);
        }
    }
}
