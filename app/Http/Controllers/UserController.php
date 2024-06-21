<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
        return response()->json(['result' =>$users],200);
    }

    public function update(UserRequest $request, $id){
        try{
            $user = User::find($id);
            if(!$user){
                return response()->json([
                    "message" => "User not found"
                ],404);
            }
            // $user->update([
            //     "name" => $request->name,
            //     "address" => $request->address,
            //     "age" => $request->age,
            //     "HIV_Status" => $request->HIV_Status,
            //     "Date_Of_Birth" => $request->Date_Of_Birth,
            //     "village" => $request->village,
            //     "Schooling_Status" => $request->Schooling_Status,
            // ]);
           
                $user->name = $request->name;
                $user->address = $request->address;
                $user->age = $request->age;
                $user->HIV_Status = $request->HIV_Status;
                $user->Date_Of_Birth = $request->Date_Of_Birth;
                $user->village = $request->village;
                $user->Schooling_Status = $request->Schooling_Status;
                $user->save();
            return response()->json([
                "message" => "User updated successfully"
            ],200);
        }catch(\Exception $err){
            return response()->json([
                'message' =>"something went wrong"
            ],500);
        }
    }
    public function store(UserRequest $request){
        try{
            // create Users
            User::create([
                "name" => $request->name,
                "address" => $request->address,
                "age" => $request->age,
                "HIV_Status" => $request->HIV_Status,
                "Date_Of_Birth" => $request->Date_Of_Birth,
                "village" => $request->village,
                "Schooling_Status" => $request->Schooling_Status,
            ]);
            return response()->json([
                "message" => "User created successfully"
            ],200);
        }catch(\Exception $err){
            return response()->json([
                'message' =>"something went wrong"
            ],500);
        }
    }

    public function show($id){
        $user = User::find($id);
       if(!$user){
        return response()->json([
            "message" => "User not found"
        ],404);
       }
       return response()->json([
           "user" => $user
       ],200);
    }

    public function destroy($id){
        $user = User::find($id);
        if(!$user){
            return response()->json([
                "message" => "User not found"
            ],404);
        }
        $user->delete();
        return response()->json([
            "message" => "User deleted successfully"
        ],200);
    }
}
