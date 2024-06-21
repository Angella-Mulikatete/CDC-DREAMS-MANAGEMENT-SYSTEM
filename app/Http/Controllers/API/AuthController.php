<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function register(RegisterRequest $request){
        $payload = $request->validated();

        try{
            $payload["password"] = Hash::make($payload["password"]);
            Admin::create($payload);
            return response()->json([
                "message" => "Account created Successfully"
            ], 200);
        }catch(\Exception $err){
            Log::info("register error".$err->getMessage());
            return response()->json([
                "message" => "Something went wrong, Try again"
            ], 500);
        }
    }

    public function login(Request $request){
        $payload = $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);
        try{
            $admin = Admin::where("email", $payload["email"])->first();
            if(!$admin){
                return response()->json([
                    "message" => "Invalid Credentials"
                ], 401);
            }
            if(!Hash::check($payload["password"], $admin->password)){
                return response()->json([
                    "message" => "Invalid Credentials"
                ], 401);
            }

            $token = $admin->createToken("web")->plainTextToken;
            $authRes = array_merge($admin->toArray(), ["token"=>$token]);
            return response()->json([
                "status" => 200,
                "message" => "Login Successful",
                "admin" => $authRes
            ], 200);
        }catch(\Exception $error){
            Log::info("Login error" . $error->getMessage());
            return response()->json([
                "message" => "Something went wrong, Try again"
            ], 500);
        }
    }

    public function checkCredentials(Request $request){
        $payload = $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);
        try {
            $admin = Admin::where("email", $payload["email"])->first();
            if (!$admin) {
                return response()->json([
                    "message" => "Invalid Credentials"
                ], 401);
            }
            if (!Hash::check($payload["password"], $admin->password)) {
                return response()->json([
                    "message" => "Invalid Credentials"
                ], 401);
            }

        
            return response()->json([
                "message" => "Correct credentials",
               
            ], 200);
        } catch (\Exception $error) {
            Log::info("Login credentials error" . $error->getMessage());
            return response()->json([
                "message" => "Something went wrong, Try again"
            ], 500);
        }
    }

    public function logout(Request $request){
        try{
            $request->admin()->currentAccessToken()->delete();
            return response()->json([
                "message" => "Logout Successful"
            ], 200);
        }catch(\Exception $e){
            Log::info("Logout error" . $e->getMessage());
            return response()->json([
                "message" => "Something went wrong, Try again"
            ], 500);
        }
    }
}
