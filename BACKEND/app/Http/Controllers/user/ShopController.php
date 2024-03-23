<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\admin\Category;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    public function category(){
        try{
            $categories=Category::select('name')->orderBy('name','ASC')->where('status',1)->get();
            return response()->json([
                'categories'=> $categories
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
}
