<?php

namespace App\Http\Requests;

use App\Enums\RoleTypes;
use Illuminate\Foundation\Http\FormRequest;

class UpdateJobApplicationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return in_array($this->user()->role_id, [
            RoleTypes::HR_COORDINATOR,
            RoleTypes::HR_MANAGER,
        ]);
    }

    public function rules(): array
    {
        return [
            'action' => ['required', 'in:approve,reject'],
        ];
    }
}
