<?php

namespace App\Enums;

use Illuminate\Support\Str;

enum JobApplicationStates: int
{
    case SUBMITTED = 0;
    case REJECTED_BY_HR_COORDINATOR = 1;
    case APPROVED_BY_HR_COORDINATOR = 2;
    case REJECTED_BY_HR_MANAGER = 3;
    case APPROVED_BY_HR_MANAGER = 4;

    public static function asArray()
    {
        $transformed = [];

        foreach (self::cases() as $value) {
            $transformed[] = [
                'value'=> $value->value,
                'slug' => $slug = Str::slug($value->name),
                'name' => Str::title(Str::replace('-', ' ', $slug)),
            ];
        }

        return $transformed;
    }
}