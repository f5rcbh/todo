import React, { useState } from "react";
import axios from "axios";

export default function Todo(props) {
  //for to-do-list componant
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
    return (
      <div>
        <p>Id: {taskObj._id}</p>
        <p>Title: {taskObj.title}</p>
        ---------------------
      </div>
    );
  });

  return (
    <div className="todo">
      {mapOver}
      <button onClick={getData}>get Tasks</button>
    </div>
  );
}
