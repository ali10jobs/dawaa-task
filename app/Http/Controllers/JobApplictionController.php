<?php

namespace App\Http\Controllers;

use App\Enums\JobApplicationStates;
use App\Enums\RoleTypes;
use App\Http\Requests\UpdateJobApplicationRequest;
use App\Models\JobAppliction;

class JobApplictionController extends Controller
{
    public function index()
    {
        return inertia('Applications/Index', [
            'applications' => auth()->user()->viewableApplications(),
        ]);
    }

    public function update(JobAppliction $jobAppliction, UpdateJobApplicationRequest $request)
    {
        $stateMappings = [
            RoleTypes::HR_COORDINATOR => [
                'approve' => JobApplicationStates::APPROVED_BY_HR_COORDINATOR,
                'reject'  => JobApplicationStates::REJECTED_BY_HR_COORDINATOR,
            ],
            RoleTypes::HR_MANAGER => [
                'approve' => JobApplicationStates::APPROVED_BY_HR_MANAGER,
                'reject'  => JobApplicationStates::REJECTED_BY_HR_MANAGER,
            ]
        ];

        $state = $stateMappings[auth()->user()->role_id][$request->action];

        $jobAppliction->update([
            'state' => $state,
        ]);

        return back();
    }
}
