<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\AdminAuthController;
use App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\admin\SubCategoryController;
use App\Http\Controllers\admin\BrandController;
use App\Http\Controllers\admin\ProductController;


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
        Route::post('refresh', [AdminAuthController::class,'refresh']);
        Route::post('me',  [AdminAuthController::class,'me']);

        Route::get('/categories', [CategoryController::class,'index']);
        Route::post('/categories/store', [CategoryController::class,'store']);
        Route::post('/categories/delete/{id}', [CategoryController::class,'destroy']);
        Route::post('/categories/get-subcategory/{id}', [CategoryController::class,'getSubCategory']);


        Route::post('/subcategories', [CategoryController::class,'index']);
        Route::post('/subcategories/store', [SubCategoryController::class,'store']);
        Route::post('/subcategories/delete/{id}', [SubCategoryController::class,'destroy']);

        Route::post('/subcategories', [CategoryController::class,'index']);
        Route::post('/subcategories/store', [SubCategoryController::class,'store']);
        Route::post('/subcategories/delete/{id}', [SubCategoryController::class,'destroy']);

        Route::post('/brands', [BrandController::class,'index']);
        Route::post('/brands/store', [BrandController::class,'store']);
        Route::post('/brands/delete/{id}', [BrandController::class,'destroy']);

        Route::post('/products', [ProductController::class,'index']);
        Route::post('/products/store', [ProductController::class,'store']);
        Route::post('/products/delete/{id}', [ProductController::class,'destroy']);
    });
});


