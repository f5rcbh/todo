import React, { useState, usuState } from "react";

export default function Todo(props) {
  const [tasks, useTasks] = useState("/backend/server.js");
  return (
    <div className="todo">
      <p>{tasks}</p>
      <button
        onClick={() => {
          return tasks;
        }}
      >
        Get Task
      </button>
    </div>
  );
}
