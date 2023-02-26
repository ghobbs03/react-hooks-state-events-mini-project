import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState([...TASKS]);

  function handleSelectedCategory(event) {
    setSelectedCategory(event.target.textContent);
  }

  function handleDelete(itemTextToDelete) {
      setTasks(tasks.filter((task) => (task.text !== itemTextToDelete)))
  }

  const filteredTasks = tasks.filter(task => task.category === selectedCategory || selectedCategory === "All")

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleSelectedCategory={handleSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
