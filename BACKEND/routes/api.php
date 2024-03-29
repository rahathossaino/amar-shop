<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\admin\SubCategoryController;
use App\Http\Controllers\admin\BrandController;
use App\Http\Controllers\admin\ProductController;
use App\Http\Controllers\admin\CouponController;
use App\Http\Controllers\admin\OrderController;
use App\Http\Controllers\admin\AdminAuthController;
use App\Http\Controllers\admin\UserController;
use App\Http\Controllers\user\UserAuthController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\SingleProductController;
use App\Http\Controllers\CartController;




Route::get('/categories',[ShopController::class,'category']);
Route::get('/subcategories',[ShopController::class,'subCategory']);
Route::get('/brands',[ShopController::class,'brand']);
Route::get('/products',[ShopController::class,'product']);
Route::get('/singleproduct/{slug}',[SingleProductController::class,'singleProduct']);
Route::post('/singleproduct/ratings/store/{slug}',[SingleProductController::class,'storeRating']);
Route::get('/singleproduct/rating/{slug}',[SingleProductController::class,'rating']);





Route::group(['prefix'=>'account'],function (){
    Route::group(['middleware'=>'guest'],function (){
        Route::post('sign-up',[UserAuthController::class,'signUp']);
        Route::post('login',[UserAuthController::class,'login']);

    });
    Route::group(['middleware'=>'auth'],function (){
        Route::post('logout',[UserAuthController::class,'logout']);
        Route::post('refresh', [UserAuthController::class,'refresh']);
        Route::post('me', [UserAuthController::class,'me']);
        Route::get('cart',[CartController::class,'cart']);
        Route::post('cart/store/{id}',[CartController::class,'store']);


    });
});

Route::group(['prefix'=>'admin'],function (){
    Route::group(['middleware'=>'admin.guest'],function (){
        Route::post('login', [AdminAuthController::class,'login']);
        Route::get('login', [AdminAuthController::class,'authenticate']);

    });
    Route::group(['middleware' => 'admin.auth'], function () {
        Route::get('user/{id}',[AdminAuthController::class,'user']);

        Route::post('logout', [AdminAuthController::class,'logout']);
        Route::post('refresh', [AdminAuthController::class,'refresh']);
        Route::post('me', [AdminAuthController::class,'me']);

        Route::get('/categories', [CategoryController::class,'index']);
        Route::post('/categories/store', [CategoryController::class,'store']);
        Route::post('/categories/delete/{id}', [CategoryController::class,'destroy']);


        Route::get('/subcategories', [SubCategoryController::class,'index']);
        Route::post('/subcategories/store', [SubCategoryController::class,'store']);
        Route::post('/subcategories/delete/{id}', [SubCategoryController::class,'destroy']);
        Route::get('/get-subcategories/{id}', [SubCategoryController::class,'getSubcategory']);


        Route::get('/brands', [BrandController::class,'index']);
        Route::post('/brands/store', [BrandController::class,'store']);
        Route::post('/brands/delete/{id}', [BrandController::class,'destroy']);

        Route::get('/products', [ProductController::class,'index']);
        Route::get('/products/{id}', [ProductController::class,'singleProduct']);
        Route::post('/products/store', [ProductController::class,'store']);
        Route::post('/products/edit/{id}', [ProductController::class,'update']);
        Route::post('/products/delete/{id}', [ProductController::class,'destroy']);
        Route::post('/product/getSlug/{name}', [ProductController::class,'getSlug']);

        Route::get('/coupons', [CouponController::class,'index']);
        Route::get('/coupons/{id}', [CouponController::class,'singleCoupon']);
        Route::post('/coupons/store', [CouponController::class,'store']);
        Route::post('/coupons/delete/{id}', [CouponController::class,'destroy']);

        Route::get('/orders', [OrderController::class,'index']);
        Route::get('/order-info/{id}', [OrderController::class,'orderInfo']);
        Route::post('/order-update/{id}', [OrderController::class,'orderInfoUpdate']);
        Route::post('/orders/delete/{id}', [OrderController::class,'destroy']);

        Route::get('/users', [UserController::class,'index']);
        Route::post('/user-info/{id}', [UserController::class,'userInfo']);
        Route::post('/user-spending/{id}', [UserController::class,'userSpending']);
        Route::post('/user-transaction/{id}', [UserController::class,'userTransaction']);
    });
});
