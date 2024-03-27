<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use App\Models\admin\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

class CartController extends Controller
{
    public function cart(){
        foreach (Cart::content() as $item){
            $path=public_path().$item->image;
            $item->image=File::get($path);
        }
        return response()->json(['cart_item'=>Cart::content()],200);
    }
    public function store($id,Request $request){
        $product=Product::where('id',$id)->with('product_image')->first();
        if(Cart::count()>0){
            $productExist=false;
            foreach (Cart::content() as $item){
                if($item->data->product_id==$product->id){
                    $productExist=true;
                    Log::info('$productExisttrue');
                    return response()->json(['error'=>'Product already exist'],422);
                }
            }
            if(!$productExist){
                Cart::add($product->id,$product->title,$request->qty,$product->price,$product->product_image->image);
                Log::info('$productExistfalse');
                return response()->json(['message'=>$product->title.' added into cart successfully'],200);
            }
        }
        else{
            Cart::add($product->id,$product->title,$request->qty,$product->price,$product->product_image->image);
            Log::info('outside');
            return response()->json(['message'=>$product->title.' added into cart successfully'],200);
        }
    }
}
