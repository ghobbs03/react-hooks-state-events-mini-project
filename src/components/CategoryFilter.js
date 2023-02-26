import { render } from "@testing-library/react";
import React from "react";


function CategoryFilter({categories, selectedCategory, handleSelectedCategory }) {
  let buttons = renderButtons();

  function renderButtons() {
    return categories.map((category) => {
      if (selectedCategory === category) {
        return ((<button key={category} className="selected" onClick={handleSelectedCategory}>{category}</button>))
      }
      return (<button key={category} onClick={handleSelectedCategory}>{category}</button>)
    })
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {buttons}
    </div>
  );
}

export default CategoryFilter;
