import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupStudent = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Student Sign Up Data:", data);
    // You can send the data to your backend here
    const response = await axios.post("/api/user/signup", data);
    console.log(response);
    if (response.status === 201) {
      navigate("/login");
    }
    reset();
  };

  return (
    <div className="bg-black min-h-screen font-sans text-white">
      {/* Navbar */}
      <div className="flex justify-end items-center bg-[#111] px-6 py-4 border-[#333] border-b">
        <div className="space-x-4">
          <button
            onClick={() => navigate("/")}
            className="hover:bg-white px-4 py-2 border border-white rounded hover:text-black transition"
          >
            Home
          </button>
          {/* <button
            onClick={() => navigate("/signup-alumni")}
            className="hover:bg-white px-4 py-2 border border-white rounded hover:text-black transition"
          >
            Alumni Sign Up
          </button> */}
          <button
            onClick={() => navigate("/login")}
            className="hover:bg-white px-4 py-2 border border-white rounded hover:text-black transition"
          >
            Log In
          </button>
        </div>
      </div>

      {/* Heading */}
      <h2 className="drop-shadow mt-10 text-2xl text-center">
        Sign Up as Student
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#111] mx-auto mt-8 p-6 border border-[#333] rounded-lg max-w-xl"
      >
        <input
          {...register("fullName", { required: true })}
          type="text"
          placeholder="Full Name"
          className="bg-black mt-2 mb-2 p-2 border border-[#555] rounded w-full text-white"
        />
        <input
          {...register("rollNumber", { required: true })}
          type="number"
          placeholder="Roll Number"
          className="bg-black mt-2 mb-2 p-2 border border-[#555] rounded w-full text-white"
        />
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email Address"
          className="bg-black mt-2 mb-2 p-2 border border-[#555] rounded w-full text-white"
        />

        <input
          {...register("age")}
          type="number"
          placeholder="Age"
          className="bg-black mt-2 mb-2 p-2 border border-[#555] rounded w-full text-white"
        />

        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
          className="bg-black mt-2 mb-2 p-2 border border-[#555] rounded w-full text-white"
        />
        <button
          type="submit"
          className="bg-white hover:bg-gray-300 mt-2 px-5 py-2 rounded font-bold text-black transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupStudent;
