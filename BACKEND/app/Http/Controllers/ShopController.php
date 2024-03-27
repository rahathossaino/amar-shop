<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\admin\Category;
use App\Models\admin\Subcategory;
use App\Models\admin\Brand;
use App\Models\admin\Product;
use App\Models\admin\ProductRating;
use Illuminate\Support\Facades\File;

class ShopController extends Controller
{
    public function category(){
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
    public function subCategory(){
        try{
            $subcategories=Subcategory::orderBy('name','ASC')->where('status',1)->get();
            return response()->json([
                'subcategories'=> $subcategories
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
    public function brand(){
        try{
            $brands=Brand::orderBy('name','ASC')->where('status',1)->get();
            return response()->json([
                'brands'=> $brands
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
    public function product(){
        try{
            $products=Product::select('products.*','categories.name as category_name')
                                ->leftJoin('categories','categories.id','products.category_id')
                                ->with('product_image')->where('products.status',1)->get();
            foreach ($products as $product){
                $path=public_path().$product->product_image->image;
                $product->product_image->image=base64_encode(File::get($path));
            }
            return response()->json([
                'products'=> $products
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }

}
