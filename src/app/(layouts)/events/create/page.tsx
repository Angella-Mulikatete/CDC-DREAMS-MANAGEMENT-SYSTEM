"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

function Page() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    try {
      console.log("Data from form", data);

      const {
        event_name,
        event_type,
        learning_outcomes,
        start_date,
        end_date
      } = data;

      // Save the form data to DB
      const events = {
        event_name: event_name,
        event_type: event_type,
        learning_outcomes: learning_outcomes,
        start_date: start_date,
        end_date: end_date
        
      };

      // make an API request to the database
      const response = await fetch("http://localhost:8000/api/addEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(events),
        cache: "no-store",
      });

      console.log("Response from server", response);

      if (!response.ok) {
        throw new Error("Failed to save form data to the database");
      }

      // Redirect to the home page after successful submission
      router.push("http://localhost:3000/events");
    } catch (error: any) {
      console.error("An error occurred:", error.message);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Add new Girl</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Event name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Name"
              {...register("event_name")}
            />
          </div>

          <div>
            <label
              htmlFor="Event Type"
              className="block text-sm font-medium text-gray-700"
            >
              Event Type
            </label>
            <input
              type="text"
              id="Event Type"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Event Type"
              {...register("event_type")}
            />
          </div>

          <div>
            <label
              htmlFor="learning Outcome"
              className="block text-sm font-medium text-gray-700"
            >
              learning Outcome
            </label>
            <input
              type="number"
              id="learningOutcome"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="learning Outcomes"
              {...register("learning_outcomes")}
            />
          </div>
          <div>
            <label
              htmlFor="Start Date"
              className="block text-sm font-medium text-gray-700"
            >
              Start Date
            </label>
            <input
              type="date"
              id="HIV_Status"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Start Date"
              {...register("start_date")}
            />
          </div>
          <div>
            <label
              htmlFor="enddate"
              className="block text-sm font-medium text-gray-700"
            >
              End Date
            </label>
            <input
              type="date"
              id="enddate"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("end_date")}
            />
          </div>
      
        </div>
        <div className="mt-6">
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page;
