import React, { useState } from "react";
// Step 1...activate the state
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
//Step 2...create the dark mode
const [isDarkMode, setisDarkMode]=
useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  //step 3...event handeling the dark mode
  const toggleDarkMode = () => {
    setisDarkMode(!isDarkMode);
  };
//Step 5...make it dynamic!!!
  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/*Step 6...add even handler to the button */}
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
