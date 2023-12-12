<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserSubcription extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'subcription_plan_id',
        'price',
        'expired_date',
        'payment_status',
        'snapToken',
    ];

    /**
     * Get the user that owns the UserSubcription
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function SubriptionPlan(): BelongsTo
    {
        return $this->belongsTo(SubriptionPlan::class);
    }
}
