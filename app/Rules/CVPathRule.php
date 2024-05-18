<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Storage;

class CVPathRule implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (!Storage::disk('public')->exists($value)) {
            $fail('CV does not exist in path:'.$value);
        }
    }
}
