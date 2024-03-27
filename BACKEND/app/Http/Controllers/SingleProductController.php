<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\admin\Product;
use App\Models\admin\ProductRating;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class SingleProductController extends Controller
{
    public function singleProduct($slug){
        try{
            $product=Product::select('products.*','brands.name as brand')
                ->leftJoin('brands','brands.id','products.brand_id')
                ->where('products.slug',$slug)->with('product_images')->first();
            foreach ($product->product_images as $product_image){
                $path=public_path().$product_image->image;
                $product_image->image=base64_encode(File::get($path));
            }
            return response()->json([
                'product'=> $product
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
    public function rating($slug){
        try{
            $product=Product::where('slug',$slug)->first();
            $productRatings=ProductRating::where('product_id',$product->id)->get();
            $overallProductRating=ProductRating::where('product_id',$product->id)->where('status',0)->avg('rating');
            $numberOfProductRating=ProductRating::where('product_id',$product->id)->where('status',0)->count('rating');
            return response()->json([
                'productRatings'=> $productRatings,
                'overallProductRating'=>$overallProductRating,
                'numberOfProductRating'=>$numberOfProductRating
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }

    public function storeRating($slug,Request $request){
        try{
            $product=Product::where('slug',$slug)->first();
            $validator=Validator::make($request->all(),[
                'name'=>'required',
                'email'=>'required|email',
                'rating'=>'required',
                'review'=>'required'
            ]);
            if($validator->fails())
            {
                return response()->json(['error'=>$validator->errors()],400);
            }
            $rating=new ProductRating();
            $rating->product_id=$product->id;
            $rating->username=$request->name;
            $rating->email=$request->email;
            $rating->rating=$request->rating;
            $rating->comment=$request->review;
            $rating->save();
            return response()->json([
                'message'=>'Your review added successfully'
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
}
