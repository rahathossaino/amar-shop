<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\admin\SubCategoryController;
use App\Http\Controllers\admin\BrandController;
use App\Http\Controllers\admin\ProductController;
use App\Http\Controllers\admin\CouponController;
use App\Http\Controllers\admin\OrderController;



//Route::get('/user', function (Request $request) {
//    return $request->user();
//})->middleware('auth:sanctum');
Route::group(['prefix'=>'admin'],function (){


    Route::get('/categories', [CategoryController::class,'index']);
    Route::post('/categories/store', [CategoryController::class,'store']);
    Route::post('/categories/delete/{id}', [CategoryController::class,'destroy']);


    Route::get('/subcategories', [SubCategoryController::class,'index']);
    Route::post('/subcategories/store', [SubCategoryController::class,'store']);
    Route::post('/subcategories/delete/{id}', [SubCategoryController::class,'destroy']);


    Route::get('/brands', [BrandController::class,'index']);
    Route::post('/brands/store', [BrandController::class,'store']);
    Route::post('/brands/delete/{id}', [BrandController::class,'destroy']);

    Route::get('/products', [ProductController::class,'index']);
    Route::post('/products/store', [ProductController::class,'store']);
    Route::post('/products/delete/{id}', [ProductController::class,'destroy']);

    Route::get('/coupons', [CouponController::class,'index']);
    Route::post('/coupons/store', [CouponController::class,'store']);
    Route::post('/coupons/delete/{id}', [CouponController::class,'destroy']);

    Route::get('/orders', [OrderController::class,'index']);
    Route::get('/order-info/{id}', [OrderController::class,'orderInfo']);
    Route::post('/order-update/{id}', [OrderController::class,'orderInfoUpdate']);
    Route::post('/orders/delete/{id}', [OrderController::class,'destroy']);

});
