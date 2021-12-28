import Todo from "./compan/Todo";
import "./App.css";
import React, { useEffect, useState } from "react";
import Register from "./compan/Register";
import Login from "./compan/Login";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  // for login and regisetr componant
  const [isLogged, setIsLogged] = useState(true);
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      <h1>app</h1>
      <p>{userName}</p>
      <p>{isLogged}</p>
      <Routes>
        <Route path="Home" element={<Todo />} />
        <Route
          path="Login"
          element={
            <Login setIsLogged={setIsLogged} setUserName={setUserName} />
          }
        />
        <Route path="Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
