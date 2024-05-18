<?php

use App\Http\Controllers\Api\JobApplicationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:sanctum', 'as' => 'api.'], function() {
    Route::put('/applications/{application}', [JobApplicationController::class, 'update'])->name('job-applications.update');
    Route::get('/applications', [JobApplicationController::class, 'index'])->name('job-applications.index');
    Route::post('/applications', [JobApplicationController::class, 'store'])->name('job-applications.store');
});
