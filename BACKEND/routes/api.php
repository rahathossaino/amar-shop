<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\AdminAuthController;
use App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\admin\SubCategoryController;
use App\Http\Controllers\admin\BrandController;
use App\Http\Controllers\admin\ProductController;
use App\Http\Controllers\admin\OrderController;
use App\Http\Controllers\admin\UserController;
use App\Http\Controllers\admin\DiscountController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/




Route::post('login', [AdminAuthController::class,'login']);

Route::group(['prefix' => 'admin'], function (){
    Route::group(['middleware' => 'api'], function(){
        Route::post('logout', [AdminAuthController::class,'logout']);
        Route::post('change-password', [AdminAuthController::class,'changePassword']);
        Route::post('password/reset-link', [AdminAuthController::class,'sendResetLinkEmail']);
        Route::post('password/reset-password-process', [AdminAuthController::class,'resetPasswordProcess']);
        Route::post('password/reset-password/{token}', [AdminAuthController::class,'resetPassword'])->name('resetPassword');

        Route::post('refresh', [AdminAuthController::class,'refresh']);
        Route::post('me',  [AdminAuthController::class,'me']);

        Route::get('/users', [UserController::class,'index']);
        Route::post('/user-info/{id}', [UserController::class,'userInfo']);
        Route::post('/user-spending/{id}', [UserController::class,'userSpending']);
        Route::post('/user-transaction/{id}', [UserController::class,'userTransaction']);


        Route::get('/categories', [CategoryController::class,'index']);
        Route::post('/categories/store', [CategoryController::class,'store']);
        Route::post('/categories/delete/{id}', [CategoryController::class,'destroy']);
        Route::get('/categories/get-subcategory/{id}', [CategoryController::class,'getSubCategory']);


        Route::get('/subcategories', [CategoryController::class,'index']);
        Route::post('/subcategories/store', [SubCategoryController::class,'store']);
        Route::post('/subcategories/delete/{id}', [SubCategoryController::class,'destroy']);

        Route::get('/subcategories', [CategoryController::class,'index']);
        Route::post('/subcategories/store', [SubCategoryController::class,'store']);
        Route::post('/subcategories/delete/{id}', [SubCategoryController::class,'destroy']);

        Route::get('/brands', [BrandController::class,'index']);
        Route::post('/brands/store', [BrandController::class,'store']);
        Route::post('/brands/delete/{id}', [BrandController::class,'destroy']);

        Route::get('/products', [ProductController::class,'index']);
        Route::post('/products/store', [ProductController::class,'store']);
        Route::post('/products/delete/{id}', [ProductController::class,'destroy']);

        Route::get('/orders', [OrderController::class,'index']);
        Route::get('/order-info/{id}', [OrderController::class,'orderInfo']);
        Route::post('/order-update/{id}', [OrderController::class,'orderInfoUpdate']);
        Route::post('/orders/delete/{id}', [OrderController::class,'destroy']);

        Route::get('/coupons', [DiscountController::class,'index']);
        Route::post('/coupons/store', [DiscountController::class,'store']);
        Route::post('/coupons/delete/{id}', [DiscountController::class,'destroy']);

    });
});


