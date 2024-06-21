import React from "react";
import BuyCarCard from "../components/BuyCarCard";

function BuyingPage() {
  return (
    <div className="w-screen h-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <BuyCarCard />
        <BuyCarCard />
        <BuyCarCard />
        <BuyCarCard />
        <BuyCarCard />
        <BuyCarCard />
        <BuyCarCard />
        <BuyCarCard />
        <BuyCarCard />
      </div>
    </div>
  );
}

export default BuyingPage;
