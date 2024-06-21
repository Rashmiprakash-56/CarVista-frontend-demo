import React from "react";
import { useNavigate } from "react-router-dom";

function AddCar() {
  const naviagte = useNavigate();

  return (
    <div className="w-screen h-auto p-8 flex flex-col justify-center items-center">
      <div className="flex justify-start mb-4 w-full">
        <button
          onClick={() => naviagte("/sell")}
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
        >
          Back
        </button>
      </div>

      <form
        action=""
        className="flex flex-col justify-center items-center bg-slate-100 w-8/12 h-auto p-4 rounded-lg shadow-md"
      >
        <div className="w-full mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Car Model
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Car model"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="w-full mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Enter your price"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="w-full mb-4">
          <label
            htmlFor="year"
            className="block text-sm font-medium text-gray-700"
          >
            Year of Model
          </label>
          <input
            type="text"
            name="year"
            id="year"
            placeholder="Enter Year"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="w-full mb-4">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Photo
          </label>
          <input
            type="file"
            name="photo"
            id="photo"
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddCar;
