import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  //setting state for search
  const [searchInput, setSearch] = useState(""); //initialized to empty string

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  //function to handle changes in the filter component
  function setNewSearch(event) {
    setSearch(event.target.value)
  }

  //displaying items
  
  const itemsToDisplay = items.filter((item) => 
    selectedCategory === "All" || item.category === selectedCategory 
  ).filter((item)=> item.name.toLowerCase().includes(search.toLowerCase())).filter((item.name.includes(searchInput))); //filtering the search term from item category

  //setting props in the jsx items
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={searchInput} onSearchChange={setNewSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
