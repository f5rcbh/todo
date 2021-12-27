import axios from "axios";
import React, { useState } from "react";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getInfo = (e) => {
    e.preventDefault();
    const userBody = {
      email,
      password,
    };

    axios
      .post("http://localhost:5000/user/login", userBody)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <div className="login">
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
        <button onClick={getInfo}>submit</button>
      </form>
    </div>
  );
}
