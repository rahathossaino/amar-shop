<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Cart extends Model
{
    use HasFactory;
    public static function add( $productId, $productTitle, $quantity, $price,$image)
    {
        $cart=new Cart();
        $user=Auth::user();
        $cart->user_id=$user->id;
        $cartData = [
            'product_id'=>$productId,
            'title' => $productTitle,
            'quantity' => $quantity,
            'price' => $price,
            'image'=>$image
        ];
        $cart->data=json_encode($cartData);
        $cart->save();
    }
    public static function count()
    {
        $user=Auth::user();
        $count=Cart::where('user_id',$user->id)->count('user_id');
        return $count;
    }
    public static function content()
    {
        $user=Auth::user();
        $items=Cart::where('user_id',$user->id)->get();
        foreach ($items as $item){
            $item->data=json_decode($item->data);
        }
        return $items;
    }
    public static function clear()
    {
        $user=Auth::user();
        $item=Cart::where('user_id',$user->id)->delete();
    }
}
