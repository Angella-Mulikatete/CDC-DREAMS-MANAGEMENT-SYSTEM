<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    use HasFactory;
    protected $fillable = [
        "event_name",
        "event_type",
        "learning_outcomes",
        "start_date",
        "end_date",
    ];
}
