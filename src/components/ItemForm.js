import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  //setting data state
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
  })

  //handling changes to the form inputs
function handleInputChange(event) {
  //destructuirng the name and value
  const [name, value] = event.target
  //setting a new state
  setFormData({
    ...formData, [name]: value
  })
}

  //handling form submission
  function handleSubmit(event) {
    //preventing the form from refreshing after each submission
    event.preventDefault();
    onItemFormSubmit({...formData, id: uuid()})
  }

  //setting props and functions in the return component
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name: 
        <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleInputChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
