import React, { useState } from "react";
import axios from "axios";

export default function Todo(props) {
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
    <div className="todo">
      {mapOver}
      <button onClick={getData}>get Tasks</button>
    </div>
  );
}
