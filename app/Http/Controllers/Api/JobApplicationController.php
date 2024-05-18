<?php

namespace App\Http\Controllers\Api;

use App\Enums\JobApplicationStates;
use App\Enums\RoleTypes;
use App\Http\Requests\Api\CreateJobApplicationRequest;
use App\Http\Requests\UpdateJobApplicationRequest;
use App\Http\Resources\JobApplicationResource;
use App\Models\JobAppliction;

class JobApplicationController
{
    public function index()
    {
        $applications = JobAppliction::all();

        return JobApplicationResource::collection($applications);
    }

    public function store(CreateJobApplicationRequest $request)
    {
        $jobAppliction = JobAppliction::create($request->validated());

        return JobApplicationResource::make($jobAppliction);
    }

    public function update(JobAppliction $application, UpdateJobApplicationRequest $request)
    {
        dd($application);
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

        $application->update([
            'state' => $state,
        ]);

        $action = $request->action == 'approve' ? 'approved' : 'rejected';

        return response()->json(['message' => 'Job application '.$action]);
    }
}