import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignupUser } from "../components/Functions/Functions";
export default function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert(`Welcome ${user.name}`);
      SignupUser(user);
    }
  };
  return (
    <figure className="h-screen flex bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        <div className="text-primary m-6">
          <div className="flex items-center mt-3 justify-center">
            <h1 className="text-4xl font-heading text-primary mt-4 mb-2">
              Sign Up
            </h1>
          </div>
          <form onSubmit={handleSubmit} method="POST">
            <label className="text-left font-heading">Name:</label>
            <input
              name="Name"
              type="text"
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
              placeholder="Username"
              className={
                "w-full p-2 font-heading text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label className="text-left font-heading">Email:</label>
            <input
              name="Email"
              type="email"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              placeholder="email"
              className={
                "w-full p-2 font-heading text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label className="font-heading">Password:</label>
            <input
              name="password"
              type="password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              placeholder="Password"
              className={
                "w-full p-2 font-heading text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label className="font-heading">Confirm Password:</label>
            <input
              name="password"
              type="password"
              onChange={(e) => {
                setUser({ ...user, confirmPassword: e.target.value });
              }}
              placeholder="Password"
              className={
                "w-full p-2 font-heading text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <div className="flex items-center mt-3 justify-center">
              <button
                className={
                  "bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                }
                value="Login"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex items-center mt-3 justify-center">
            <Link to="/login">
              <button className={"justify-center text-blue-500"}>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </figure>
  );
}
