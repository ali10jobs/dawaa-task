<?php

use App\Http\Controllers\JobApplictionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ApplicationReportsController;
use App\Http\Requests\CreateJobApplicationRequest;
use App\Models\Country;
use App\Models\JobAppliction;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'countries' => Country::all(),
        'application' => new JobAppliction(),
    ]);
})->middleware("guest")->name('applications.create');

Route::post('/job-applications', function(CreateJobApplicationRequest $request) {
    $cvPath = $request->file('cv')->storePublicly('resumes', ['disk' => 'public']);
    JobAppliction::create([
        'name'       => $request->name,
        'dob'        => $request->dob,
        'gender'     => $request->gender,
        'country_id' => $request->country_id,
        'cv_path'    => $cvPath,
    ]);

    return to_route('applications.create');
})->middleware('guest')->name('applications.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/job_applications', [JobApplictionController::class, 'index'])->name('applications.index');

    Route::get('/reports', [ApplicationReportsController::class, 'index'])->name('reports.index');

    Route::put('/job-applications/{job_appliction}', [JobApplictionController::class, 'update'])->name('applications.update');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
