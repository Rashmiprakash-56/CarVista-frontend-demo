import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isLoggedin , setIsLoggedIn] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-semibold text-gray-800 ml-3">
          <Link to="/">Carplace</Link>
        </div>
        <div className="flex space-x-6 mr-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "text-gray-600 font-medium hover:text-red-600 hover:font-bold" +
              (isActive ? " text-red-500 font-bold" : "")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/buy"
            className={({ isActive }) =>
              "text-gray-600 font-medium hover:text-red-600 hover:font-bold" +
              (isActive ? " text-red-500 font-bold" : "")
            }
          >
            Buy
          </NavLink>
          <NavLink
            to="/sell"
            className={({ isActive }) =>
              "text-gray-600 font-medium hover:text-red-600 hover:font-bold" +
              (isActive ? " text-red-500 font-bold" : "")
            }
          >
            Sell
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              "text-gray-600 font-medium hover:text-red-600 hover:font-bold" +
              (isActive ? " text-red-500 font-bold" : "")
            }
          >
            Reviews
          </NavLink> 
         
         {isLoggedin ? <div className="flex justify-between items-center  ">
          <img src="https://i.pinimg.com/564x/8e/0c/fa/8e0cfaf58709f7e626973f0b00d033d0.jpg" alt="" className="object-cover rounded-full w-9 h-8"/>
          <button
          onClick={()=>setIsLoggedIn(false)}
          className="bg-red-600 font-semibold hover:bg-red-800 px-2 py-1 rounded-md transition duration-300 self-start text-white"
          >Logout</button>
          </div>
         :  <NavLink
            to="/login"
            className={({ isActive }) =>
              "text-gray-600 font-medium hover:text-red-600 hover:font-bold" +
              (isActive ? " text-red-500 font-bold" : "")
            }
          >
            Login
          </NavLink> }
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
