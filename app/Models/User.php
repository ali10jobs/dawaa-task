<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Enums\RoleTypes;
use App\Enums\JobApplicationStates;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function viewableApplications()
    {
        $role = $this->role_id;

        return \App\Models\JobAppliction::query()
            ->when($role == RoleTypes::HR_MANAGER, function($query) {
                $query->where('state', JobApplicationStates::APPROVED_BY_HR_COORDINATOR);
            })
            ->when($role == RoleTypes::HR_COORDINATOR, function($query) {
                $query->where('state', JobApplicationStates::SUBMITTED);
            })
            ->get();
    }
}
