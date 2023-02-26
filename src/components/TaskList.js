import React from "react";
import Task from "./Task";
import { useState } from "react";

function TaskList({ tasks, handleDelete }) {

  const itemListElements = [...tasks].map((task, index) => {
    return (<Task key={index} text={task.text} category={task.category} handleDelete={handleDelete} />);
  });


  return (
    <div className="tasks">
      {itemListElements}
    </div>
  );
}

export default TaskList;
