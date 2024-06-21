<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if (request()->isMethod('POST')) {
            return [
                'event_name' => 'required|string|max:256',
                'event_type' =>'required|string',
                'learning_outcomes' =>'required|string',
                'start_date' =>'required|string',
                'end_date' =>'required|string',
            ];
        } else {
            return [
                'event_name' => 'required|string|max:256',
                'event_type' => 'required|string',
                'learning_outcomes' => 'required|string',
                'start_date' => 'required|string',
                'end_date' => 'required|string',
            ];
        }
    }

    public function messages()
    {
        if (request()->isMethod('POST')) {
            return [
                'event_name' => 'event name is required',
                'event_type' => 'event type is required',
                'learning_outcomes' => 'learning outcomes is required',
                'start_date' => 'start date required',
                'end_date' => 'end date required'


            ];
        } else {
            return [
                'event_name' => 'event name is required',
                'event_type' => 'event type is required',
                'learning_outcomes' => 'learning outcomes is required',
                'start_date' => 'start date required',
                'end_date' => 'end date required'
            ];
        }
    }
}
