import Todo from "./compan/Todo";
import "./App.css";
import React, { useState } from "react";
import Register from "./compan/Register";
import Login from "./compan/Login";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function App() {
  // for login and regisetr componant
  const [isLogged, setIsLogged] = useState(true);
  const [userName, setUserName] = useState("");

  // post data for Todo
  const postData = (body) => {
    axios
      .post("http://localhost:5000/f5rcbh", body)
      .then((res) => {
        console.log("Data", res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <body>
      <div className="App">
        <h1>app</h1>
        <nav>
          <ul>
            <li>
              <Link to="/Todo">
                <button>to do list</button>
              </Link>
            </li>
            <li>
              <Link to="/Login">
                <button>Login</button>
              </Link>
            </li>
            <li>
              <Link to="/Register">
                <button>Register</button>
              </Link>
            </li>
          </ul>
        </nav>
        <p>{userName}</p>
        <p>{isLogged}</p>
        <Routes>
          <Route path="Todo" element={<Todo newFun={postData} />} />
          <Route
            path="Login"
            element={
              <Login setIsLogged={setIsLogged} setUserName={setUserName} />
            }
          />
          <Route path="Register" element={<Register />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;
