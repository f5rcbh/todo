// import Todo from "./compan/Todo";
import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import Register from "./compan/Register";

function App() {
  const [task, setTask] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:5000/f5rcbh")
      .then((Response) => {
        console.log("Data", Response.data);
        setTask(Response.data);
      })
      .catch((err) => {
        console.log("error", err);
        setTask(err);
      });
  };

  const mapOver = task.map((taskObj) => {
    return <p>{taskObj.title}</p>;
  });
  return (
    <div className="App">
      <h1>app</h1>
      <button onClick={getData}>get Tasks</button>
      {mapOver}
      <Register />
    </div>
  );
}

export default App;
