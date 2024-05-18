<?php

namespace App\Models;

use App\Enums\JobApplicationStates;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobAppliction extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $appends = ['cv', 'applied_at', 'nationality'];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    protected function casts(): array
    {
        return [
            'created_at' => 'datetime:Y-m-d',
            'state' => JobApplicationStates::class,
        ];
    }

    public function getCvAttribute()
    {
        return "storage/{$this->cv_path}";
    }

    public function getAppliedAtAttribute()
    {
        return $this->created_at ? $this->created_at->diffForHumans() : null;
    }

    public function getNationalityAttribute()
    {
        return $this->country ? $this->country->name : null;
    }
}
