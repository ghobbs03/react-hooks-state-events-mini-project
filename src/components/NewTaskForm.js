import React from "react";
import { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [details, setDetails] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Code");

  const categoriesExceptAll = categories.filter(category => (category !== "All"))
  const optionElements = [...categoriesExceptAll].map((category, index) => {
    return <option key={index} value={category}>{category}</option>
  });

  function handleOptionChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleTextChange(event) {
    setDetails(event.target.value);
  }

  function handleSubmit(event) {
    console.log(event.target)
    event.preventDefault();
    const newData = {
      text: details,
      category: selectedCategory
    };

    onTaskFormSubmit(newData);
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" value={selectedCategory} onChange={handleOptionChange}>
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
