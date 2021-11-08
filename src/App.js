import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Post from "./components/Post/Post";
import WriteArticle from "./pages/WriteArticle";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="md:ml-20 p-4">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/write" element={<WriteArticle />} />
          <Route exact path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
