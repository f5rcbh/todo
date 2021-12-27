import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const postInfo = (e) => {
    e.preventDefault();
    console.log("ss");
    const userBody = {
      email,
      password,
      userName,
    };

    axios
      .post("http://localhost:5000/user/Register", userBody)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <div className="register">
      <form>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <br />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
        />
        <br />
        <button onClick={postInfo}>submit</button>
      </form>
      <p>i have An Account</p>
      <Link to="/Login">
        <button>Login</button>{" "}
      </Link>
    </div>
  );
}
