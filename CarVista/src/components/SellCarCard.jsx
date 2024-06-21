import React from "react";

function SellCarCard() {
  return (
    <div className="flex flex-col border border-gray-300 rounded-lg w-full m-4 p-4 shadow-md">
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
        <button className="mt-3 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 self-start">
          Edit
        </button>
      </div>
    </div>
  );
}

export default SellCarCard;
