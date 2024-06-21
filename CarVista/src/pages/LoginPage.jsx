import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

function LoginPage() {
  return (
    <div className="flex justify-center items-center bg-slate-800 h-screen">
      <div className="flex justify-around items-center bg-slate-200 w-[80vw] h-[70vh]">
        <div className="bg-slate-500 ">
          <Login />
        </div>

        <div className="bg-slate-500 ">
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
