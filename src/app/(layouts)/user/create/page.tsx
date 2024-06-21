'use client'
import React from 'react'
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

function Page() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    try {
      console.log("Data from form", data);

      const {
        name,
        address,
        age,
        HIV_Status,
        dateofbirth,
        village,
        schoolStatus,
      } = data;

      // Save the form data to DB
      const users = {
        name: name,
        address: address,
        age: age,
        HIV_Status: HIV_Status,
        Date_Of_Birth: dateofbirth,
        village: village,
        Schooling_Status: schoolStatus,
      };

      // make an API request to the database
      const response = await fetch("http://localhost:8000/api/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(users),
        cache: "no-store",
      });

      console.log("Response from server", response);

      if (!response.ok) {
        throw new Error("Failed to save form data to the database");
      }

      const uploadedusers = await response.json();
      console.log(uploadedusers);

      // Redirect to the home page after successful submission
      router.push("http://localhost:3000/");
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
              Child name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Name"
              {...register("name")}
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Address"
              {...register("address")}
            />
          </div>
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Age"
              {...register("age")}
            />
          </div>
          <div>
            <label
              htmlFor="HIV_Status"
              className="block text-sm font-medium text-gray-700"
            >
              HIV Status
            </label>
            <input
              type="text"
              id="HIV_Status"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="HIV Status"
              {...register("HIV_Status")}
            />
          </div>
          <div>
            <label
              htmlFor="dateofbirth"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateofbirth"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("dateofbirth")}
            />
          </div>
          <div>
            <label
              htmlFor="village"
              className="block text-sm font-medium text-gray-700"
            >
              Village
            </label>
            <input
              type="text"
              id="village"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Village Name"
              {...register("village")}
            />
          </div>
          <div>
            <label
              htmlFor="schoolStatus"
              className="block text-sm font-medium text-gray-700"
            >
              Schooling Status
            </label>
            <input
              type="text"
              id="schoolStatus"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Schooling Status"
              {...register("schoolStatus")}
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

export default Page
