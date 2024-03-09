<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\admin\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(){
        try{
            $discounts=Order::orderBy('name','ASC')->get();
            return response()->json([
                'discounts'=>$discounts
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
}
