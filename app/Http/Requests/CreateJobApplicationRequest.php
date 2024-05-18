<?php

namespace App\Http\Requests;

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
            'cv'         => ['required', 'file', 'mimes:pdf'],
        ];
    }
}
