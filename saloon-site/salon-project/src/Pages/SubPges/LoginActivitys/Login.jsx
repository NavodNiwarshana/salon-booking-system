import React, {  } from "react";
import {  FaAngleLeft } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

function Login() {
  return (
    <>
      <form className="space-y-4 mt-4 p-4 h-auto max-w-md mx-auto bg-gray-600 border-4 border-black rounded-2xl shadow-md">
        <div className="flex justify-between my-4 mx-5 ">
          <button>
            <FaAngleLeft className="w-8 h-8 border-2  bg-white border-black hover:fill-white hover:bg-black  rounded-full" />
          </button>

          <h1 className="text-center font-playfir text-white font-bold text-2xl">
            Log In
          </h1>

          <button>
            <IoIosClose className="w-8 h-8 border-2 bg-white border-black hover:fill-white hover:bg-black  rounded-full" />
          </button>
        </div>

        <div className="relative py-8">
          <div className="font-itim my-4 mt-10">
            <label
              className="absolute text-white border-1 text-xl pl-6"
              htmlFor="name"
            >
              Username
            </label>

            <input
              className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8 pt-4 py-2 px-3 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
              id="Userame"
              type="text"
              placeholder="Enter Your Username"
            />
          </div>
          <div className="font-itim my-6">
            <label
              className="absolute text-white border-1 text-xl  pl-6"
              htmlFor=""
            >
              {" "}
              Password
            </label>

            <input
              className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8 pt-4 py-2 px-3 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
              id="Password"
              type="password"
              placeholder="Enter Your Password"
            />

            <div className="flex items-center justify-center text-center rounded-full  p-1 my-8">
              <button
                className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-1/2 rounded-full border-2 border-white"
                type="button"
              >
                Log In
              </button>
            </div>
            <div className="text-white text-center">
            <button>
                <p className="m-2 text-lg hover:text-xl hover:font-blod">Fogot Password</p>
            </button><br />
            <button>
                <p className="m-2 text-lg hover:text-xl hover:font-blod">Sign Up</p>
            </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;