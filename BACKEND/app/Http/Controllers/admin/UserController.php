<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\admin\Order;
use App\Models\admin\OrderItem;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index(){
        try{
            $users=User::where('role',1)->get();
            return response()->json([
                'users'=>$users
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
    public function userInfo($id){
        try{
            $userInfo=User::find($id);
            return response()->json([
                'userInfo'=>$userInfo
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
    public function userSpending($id){
        try{
            $userSpending=Order::select(DB::raw('MONTHNAME(created_at) as month'),
                DB::raw('SUM(grand_total) as total'))
                ->where('user_id',$id)
                ->where('created_at','>=',now()->subMonths(6))
                ->groupBy('month')
                ->orderBy(DB::raw('MONTH(created_at)'),'DESC')
                ->get();
            return response()->json([
                'userSpending'=>$userSpending
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
    public function userTransaction($id){
        try{
            $userTransaction=OrderItem::select('order_items.*','products.name as product_name')
                ->leftJoin('products','products.id','order_items.product_id')
                ->where('user_id',$id);
            return response()->json([
                'userTransaction'=>$userTransaction
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>'Something went wrong .Try again!'
            ]);
        }
    }
}
