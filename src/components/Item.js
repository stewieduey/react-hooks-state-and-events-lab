// step 1...use state activation?
import React, { useState } from "react";

function Item({ name, category }) {
  //step 2..got to create the state of the cart
  const [inCart, setInCart] = 
  useState(false);

  //steps 3 and 4...make the button and class name dynamic. Oh almost for got the text of the button
  const listItemClass = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add To Cart";

  //Step 5...Let's not forget the event handler
  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={listItemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/*Step 6, 7....let's not forget to add some love to the button and place the listItemClass in the blank*/}
      <button className="add"
      onClick={toggleCart}> { buttonText} </button>
    </li>
  );
}

export default Item;
