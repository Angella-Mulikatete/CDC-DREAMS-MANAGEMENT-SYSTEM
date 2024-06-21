<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
       if(request()->isMethod('POST')){
        return [
            'name' => 'required|string|max:256',
             'address' => 'required|string',
             'age' => 'required|string',
             'HIV_Status' => 'required|string',
             'Date_Of_Birth' => 'required|string',
             'village' => 'required|string',
             'Schooling_Status' => 'required|string',
        ];
       }else{
        return [
            'name' => 'required|string|max:256',
             'address' => 'required|string',
             'age' => 'required|string',
             'HIV_Status' => 'required|string',
             'Date_Of_Birth' => 'required|string',
             'village' => 'required|string',
             'Schooling_Status' => 'required|string',
        ];
       }
    }

    public function messages()
    {
        if (request()->isMethod('POST')) {
            return [
                'name' => 'name is required',
                'address' => 'address is required',
                'age' => 'age is required',
                'HIV_Status' => 'Hiv status is required',
                'Date_Of_Birth' => 'Date of birth is required',
                'village' => 'village is required',
                'Schooling_Status' => 'status is required',
            ];
        } else {
            return [
                'name' => 'name is required',
                'address' => 'address is required',
                'age' => 'age is required',
                'HIV_status' => 'Hiv status is required',
                'Date_Of_Birth' => 'Date of birth is required',
                'village' => 'village is required',
                'Schooling_Status' => 'status is required',
            ];
        }
    }
}
