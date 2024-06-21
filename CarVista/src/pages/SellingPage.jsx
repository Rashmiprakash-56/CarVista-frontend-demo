import React from "react";
import SellCarCard from "../components/SellCarCard";
import { useNavigate } from "react-router-dom";

function SellingPage() {
   const naviagte = useNavigate();

  return (
    <div className="w-screen h-auto p-8">
      <div className="flex justify-end mb-4">
        <button 
        onClick={() => naviagte("/sell/addcar")}
        className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300">
          Add Car
        </button>
      </div>
      <div className="flex justify-start">
        <span className="text-lg font-semibold text-gray-800">
          Your Listed Cars
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <SellCarCard />
        <SellCarCard />
        <SellCarCard />
        <SellCarCard />
        <SellCarCard />
        <SellCarCard />
        <SellCarCard />
        <SellCarCard />
        <SellCarCard />
      </div>
    </div>
  );
}

export default SellingPage;
