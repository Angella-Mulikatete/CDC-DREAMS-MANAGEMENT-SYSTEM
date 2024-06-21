<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\AdminController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EventController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::middleware('auth:sanctum') ->group(function(){
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::post('/profile/upadate', [AdminController::class, 'updateProfileImage']);
});

Route::get('/admin', function (Request $request) {
    return $request->admin();
})->middleware('auth:sanctum');

Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/checkCredentials', [AuthController::class, 'checkCredentials']);

Route::get('/user', [UserController::class, 'index']);
Route::get('/user/{id}', [UserController::class,'show']);
Route::put('/updateUser/{id}', [UserController::class,'update']);
Route::post('/addUser', [UserController::class, 'store']);
Route::delete('/deleteUser/{id}', [UserController::class, 'destroy']);

Route::get('/event', [EventController::class, 'index']);
Route::get('/event/{id}', [EventController::class, 'show']);
Route::put('/updateEvent/{id}', [EventController::class, 'update']);
Route::post('/addEvent', [EventController::class, 'store']);
Route::delete('/deleteEvent/{id}', [EventController::class, 'destroy']);