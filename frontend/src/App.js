import Todo from "./compan/Todo";
import "./App.css";
import React, { useState } from "react";
import Register from "./compan/Register";
import Login from "./compan/Login";
import { Routes, Route } from "react-router-dom";

function App() {
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
            <Login
              setIsLogged={setIsLogged}
              setUserName={setUserName}
              userName={userName}
            />
          }
        />
        <Route path="Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
