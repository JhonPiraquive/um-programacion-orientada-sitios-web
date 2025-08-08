<?php

use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/check-is-working', function(){
    return 'Is Working!';
});

Route::group(['prefix' => '/tasks'], function() {
    Route::get('/', [TaskController::class, 'read']);
    Route::get('/active', [TaskController::class, 'readActive']);
    Route::post('/', [TaskController::class, 'create']);
    Route::put('/{taskId}', [TaskController::class, 'update']);
    Route::patch('/{taskId}', [TaskController::class, 'patch']);
    Route::delete('/{taskId}', [TaskController::class, 'delete']);
});
