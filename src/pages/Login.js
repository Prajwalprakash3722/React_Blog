import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    localStorage.setItem("token", email);
    window.alert("Login Successful");
    window.location.href = "/";
  };
  return (
    <figure className="min-h-screen flex">
      <div className="w-full max-w-md m-auto rounded-lg border border-primaryBorder shadow-default py-10 px-1 bg-gray-100">
        <div className="text-primary m-6">
          <div className="flex items-center mt-3 justify-center">
            <h1 className="text-4xl font-heading text-primary mt-4 mb-2">
              Login
            </h1>
          </div>
          <form onSubmit={handleSubmit} method="POST">
            <label className="text-left font-heading">Email:</label>
            <input
              name="Email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
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
                setPassword(e.target.value);
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
                login
              </button>
            </div>
          </form>
          <div className="flex items-center mt-3 justify-center">
            <Link to="/signup">
              <button className={"justify-center text-blue-500"}>Signup</button>
            </Link>
          </div>
        </div>
      </div>
    </figure>
  );
}
