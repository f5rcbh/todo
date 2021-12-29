import React, { useState } from "react";
import axios from "axios";
import "../App.css";

export default function Todo(props) {
  //for to-do-list componant
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");

  //delete data
  const delData = () => {
    axios
      .delete("http://localhost:5000/f5rcbh")
      .then((res) => {
        console.log("Data", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setTask([]);
  };
  // show data
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

  const hideData = () => {
    setTask([]);
  };

  const postDataFun = () => {
    props.newFun({ title: title, isCompleted: false });
  };

  const mapOver = task.map((taskObj) => {
    return (
      <div className="todo-map">
        <input type="checkbox" />

        {taskObj.title}

        <button>delete</button>
      </div>
    );
  });
  return (
    <div className="todo">
      <input
        type="text"
        placeholder="enter your thing"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      {mapOver}
      <button
        type="submit"
        onClick={() => {
          postDataFun({ title: title, isCompleted: false });
        }}
      >
        add
      </button>
      <button onClick={delData}>delete</button>
      <button onClick={getData}>get Tasks</button>
      <button onClick={hideData}>hide Tasks</button>
    </div>
  );
}
