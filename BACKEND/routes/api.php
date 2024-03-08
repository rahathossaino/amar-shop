<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\AdminAuthController;

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
// Route::get('login', [AdminAuthController::class,'login']);
Route::post('login', [AdminAuthController::class,'login']);

Route::group(['prefix' => 'auth'], function (){
    Route::group(['middleware' => 'api'], function(){
        Route::post('logout', [AdminAuthController::class,'logout']);
        Route::post('refresh', [AdminAuthController::class,'refresh']);
        Route::post('me',  [AdminAuthController::class,'me']);
    });
});


