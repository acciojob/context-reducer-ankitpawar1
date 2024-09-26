import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppProvider";

const ShoppingList = () => {
  const { addItem, shoppingList, removeItem, clearList } =
    useContext(AppContext);
  const [inputVal, setInputVal] = useState("");
  const handleAdd = () => {
    if (inputVal.trim()) {
      addItem(inputVal.trim());
      setInputVal("");
    }
  };

  //   useEffect(() => {
  //     console.log(shoppingList);
  //   }, [shoppingList]);
  return (
    <div>
      <input
        id="shopping-input"
        onChange={(e) => setInputVal(e.target.value)}
        value={inputVal}
        placeholder="Enter item"
      />
      <button onClick={handleAdd}>Add</button>
      <br />
      {shoppingList.length > 0 ? (
        <ul>
          {shoppingList.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <h4>There are no items</h4>
      )}
      <br />
      <button id="clear-list" onClick={clearList}>
        Clear List
      </button>
    </div>
  );
};

export default ShoppingList;
