<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class JobApplicationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'          => $this->id,
            'name'        => $this->name,
            'dob'         => $this->dob,
            'gender'      => $this->gender,
            'nationality' => $this->nationality,
            'cv'          => $this->cv,
            'applied_at'  => $this->applied_at,
            'state'       => $this->state,
        ];
    }
}
