import React from "react";
import { useNavigate } from "react-router-dom";

function BuyCarCard() {
   const navigate = useNavigate();

  return (
    <div className="flex flex-col border bg-white border-gray-300 rounded-lg w-full m-4 p-4 shadow-md">
      <img
        src="https://i.pinimg.com/564x/95/69/d2/9569d2ee0ede39789b51a30f51c04d28.jpg"
        alt="car"
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="flex flex-col justify-between mt-3">
        <div>
          <span className="font-semibold text-lg">Ford 450</span>
          <span className="text-sm text-gray-600 block">2009</span>
          <span className="text-sm block">₹10,00,000</span>
        </div>
        <button
        onClick={()=>navigate("/buy/payment")}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 self-start">
          Buy
        </button>
      </div>
    </div>
  );
}

export default BuyCarCard;
