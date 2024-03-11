<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\admin\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(){
        try{
            $orders=Order::latest('id')->get();
            return response()->json([
                'orders'=>$orders
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }

    public function orderInfo($id){
        try{
            $order=Order::find($id);
            return response()->json([
                'order'=>$order
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }

    public function orderInfoUpdate(Request $request,$id){
        try{
            $order=Order::find($id);
            if(!empty($order)){
                if(!empty($request->status)){
                    $order->status=$request->status;
                }
                if(!empty($request->shipped_date)){
                    $order->shipped_date=$request->shipped_date;
                }
            }
            return response()->json([
                'message'=>'Order updated successfully'
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }

    public function destroy($id){
        try{
            $order=Order::find($id);
            if(empty($order)){
                return response()->json([
                    'message'=>"Order Doesn't exist"
                ],404);
            }
            $order->delete();
            return response()->json([
                'message'=>"Order deleted successfully"
            ],200);
        }catch (\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
}
