<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\ProductImage;
use App\Models\admin\Product;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use function PHPUnit\Framework\MockObject\object;


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
                'name'=>'required|string',
                'slug'=>'required',
                'short_description'=>'required|string',
                'description'=>'required|string',
                'category'=>'required',
                'subcategory'=>'required',
                'brand'=>'required',
                'price'=>'required|numeric',
                'sku'=>'required',
                'images.*' => 'image|mimes:jpeg,png,jpg|max:7500'
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
//                ProductImage::store($request,$product->id);
                if($request->hasFile('images')){
                    foreach ($request->file('images') as $image) {
                        $productImage=new ProductImage();
                        $productImage->product_id=$product->id;
                        $ext=$image->getOriginalExtension();
                        $newImage=$product->id.'-'.time().'.'.$ext;
                        $image->move(public_path().'/upload/product/',$newImage);
                        $productImage->image=public_path().'/upload/product/'.$newImage;
                        $productImage->save();
                    }
                }
                else{
                    return response()->json('fuck');
                }
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
                'error'=>'Something went wrong .Try again!'.$e
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
