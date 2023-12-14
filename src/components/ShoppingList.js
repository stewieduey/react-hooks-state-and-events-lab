import React, { useState } from "react";
//Activate!
import Item from "./Item";

function ShoppingList({ items }) {
//Create state for the intended category
const [selectedCategory, setSelectedCategory] = 
useState("All");

//when the value of the intended element is changed, update the state
const handleCategoryChange = (e) => {
  setSelectedCategory(e.target.value);
};

//this is where we set up the filter mech 
const filteredItems = items.filter(
  (item) => 
  selectedCategory === "All" ||
item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter"
        onChange={handleCategoryChange}
        value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
