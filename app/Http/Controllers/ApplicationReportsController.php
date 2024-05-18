<?php

namespace App\Http\Controllers;

use App\Enums\JobApplicationStates;
use App\Models\JobAppliction;
use Illuminate\Http\Request;

class ApplicationReportsController extends Controller
{
    public function index()
    {
        $applications = JobAppliction::latest()->get();

        return inertia('Reports/Index', [
            "applications" => $applications,
            'states' => JobApplicationStates::asArray(),
        ]);
    }
}
