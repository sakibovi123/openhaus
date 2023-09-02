<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::post("/v1/register", [\App\Http\Controllers\auth\AuthController::class, "register"])->name("register");
Route::post('/v1/login', [\App\Http\Controllers\auth\AuthController::class, "login"])->name("login");

Route::group(["middleware" => "api"], function ($routes){
    Route::post('/v1/login', [\App\Http\Controllers\auth\AuthController::class, "login"])->name("login");
    Route::post('/v1/logout', [\App\Http\Controllers\auth\AuthController::class, "logout"]);
    Route::post('/v1/refresh', [\App\Http\Controllers\auth\AuthController::class, "refresh"]);
    Route::post('/v1/me', [\App\Http\Controllers\auth\AuthController::class, "me"]);
});

