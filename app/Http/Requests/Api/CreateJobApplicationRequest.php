<?php

namespace App\Http\Requests\Api;

use App\Enums\JobApplicationStates;
use App\Rules\CVPathRule;
use Illuminate\Foundation\Http\FormRequest;

class CreateJobApplicationRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name'       => ['required'],
            'dob'        => ['required', 'date'],
            'gender'     => ['required', 'in:male,female'],
            'country_id' => ['required', 'exists:countries,id'],
            'cv_path'    => ['required', new CVPathRule],
        ];
    }
    
    public function validated($key = null, $default = null)
    {
        return array_merge(parent::validated(), [
            'state' => JobApplicationStates::SUBMITTED,
        ]);
    }
}
