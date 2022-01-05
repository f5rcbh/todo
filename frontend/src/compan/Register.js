import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register(props) {
  return (
    <div className="register">
      <form>
        <input
          type="email"
          placeholder="enter your e-mail"
          onChange={(e) => {
            props.setEmail(e.target.value);
          }}
          value={props.email}
        />
        <br />
        <input
          placeholder="enter your password"
          type="password"
          onChange={(e) => {
            props.setPassword(e.target.value);
          }}
          value={props.password}
        />
        <br />
        <input
          placeholder="enter your user name"
          type="text"
          onChange={(e) => {
            props.setUserNameInfo(e.target.value);
          }}
          value={props.userNameInfo}
        />
        <br />
        <button onClick={props.postInfo}>submit</button>
      </form>
      <p>i have An Account</p>
      <Link to="/Login">
        <button>Login</button>{" "}
      </Link>
    </div>
  );
}
