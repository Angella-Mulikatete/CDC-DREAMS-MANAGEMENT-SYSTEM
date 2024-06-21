<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;
    protected $fillable = [
        "name",
        "address",
        "age",
        "HIV_Status",
        "Date_Of_Birth",
        "village",
        "Schooling_Status",
    ];
}
