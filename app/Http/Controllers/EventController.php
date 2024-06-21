<?php

namespace App\Http\Controllers;

use App\Models\Events;
use Illuminate\Http\Request;
use App\Http\Requests\EventRequest;

class EventController extends Controller
{
    public function index()
    {
        $events = Events::all();
        return response()->json(['result' => $events], 200);
    }

    public function update(EventRequest $request, $id)
    {
        try {
            $event = Events::find($id);
            if (!$event) {
                return response()->json([
                    "message" => "User not found"
                ], 404);
            }
         

            $event->event_name = $request->event_name;
            $event->event_type = $request->event_type;
            $event->learning_outcomes = $request->learning_outcomes;
            $event->start_date = $request->start_date;
            $event->end_date = $request->end_date;
            $event->save();
            return response()->json([
                "message" => "Event updated successfully"
            ], 200);
        } catch (\Exception $err) {
            return response()->json([
                'message' => "something went wrong"
            ], 500);
        }
    }

    public function store(EventRequest $request)
    {
        try {
            // create Users
            Events::create([
                "event_name" => $request->event_name,
                "event_type" => $request->event_type,
                "learning_outcomes" => $request->learning_outcomes,
                "start_date" => $request->start_date,
                "end_date" => $request->end_date,
            ]);
            return response()->json([
                "message" => "Event created successfully"
            ], 200);
        } catch (\Exception $err) {
            return response()->json([
                'message' => "something went wrong"
            ], 500);
        }
    }

    public function show($id)
    {
        $event = Events::find($id);
        if (!$event) {
            return response()->json([
                "message" => "event not found"
            ], 404);
        }
        return response()->json([
            "event" => $event
        ], 200);
    }

    public function destroy($id)
    {
        $event = Events::find($id);
        if (!$event) {
            return response()->json([
                "message" => "event not found"
            ], 404);
        }
        $event->delete();
        return response()->json([
            "message" => "event deleted successfully"
        ], 200);
    }
}
