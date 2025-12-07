import React from "react";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Card */}
      <div className="flex w-[850px] h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Left Side - Form */}
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-bold">Let's get Started</h2>
          <p className="text-gray-500 text-sm mb-6">Create your account</p>

          {/* Name */}
          <label className="text-sm font-semibold">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full mb-4 mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Email */}
          <label className="text-sm font-semibold">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full mb-4 mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Password */}
          <label className="text-sm font-semibold">Password</label>
          <div className="relative mb-4 mt-1">
            <input
              type="password"
              placeholder="********"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <span className="absolute right-3 top-3 cursor-pointer text-gray-500">
              👁
            </span>
          </div>

          {/* Role Buttons */}
          <div className="flex gap-3 mb-4">
            <button className="flex-1 border rounded-full py-2 text-sm font-medium hover:bg-black hover:text-white transition">
              Student
            </button>
            <button className="flex-1 border rounded-full py-2 text-sm font-medium hover:bg-black hover:text-white transition">
              Educator
            </button>
          </div>

          {/* Sign Up Button */}
          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold mb-4 hover:bg-gray-800 transition">
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">Or continue with</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center border py-3 rounded-lg hover:bg-gray-100 transition">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Google
          </button>

          {/* Login Link */}
          <p className="text-center text-sm mt-4 text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-black font-semibold">
              Login
            </a>
          </p>
        </div>

        {/* Right Side - Logo */}
        <div className="w-1/2 bg-black flex flex-col items-center justify-center">
          <img
            src="https://dummyimage.com/120x120/ffffff/000000.png&text=VC"
            alt="Virtual Courses Logo"
            className="mb-4"
          />
          <h2 className="text-white text-lg font-bold tracking-wide">
            VIRTUAL COURSES
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
