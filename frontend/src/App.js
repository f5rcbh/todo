import Todo from "./compan/Todo";
import "./App.css";
import React from "react";
import Register from "./compan/Register";
import Login from "./compan/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>app</h1>
      <Routes>
        <Route path="Home" element={<Todo />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
