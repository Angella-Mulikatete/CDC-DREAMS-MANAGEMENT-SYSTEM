<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AdminController extends Controller
{
    public function updateProfileImage(Request $request){
        $payload = $request->validate([
            "profile_image" =>"required|image|mimes:jpg,jpg,gif,webp,png,svg|max:2048"
        ]);

        try{
            $admin = $request->admin();
            $filename = $payload['profile_image']->store("images_".$admin->id);
            Admin::where("id", $admin->id)->update(["profile_image" => $filename]);
            return response()->json(["image" => $filename]);
        } catch (\Exception $e) {
            Log::info("profile image error" . $e->getMessage());
            return response()->json([
                "message" => "Something went wrong, Try again"
            ], 500);
        }
    }
}
