import React, { useContext, createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [username, setUsername] = useState({
    name: "",
    isAuthenticated: false,
  });
  const [shoppingList, setShoppingList] = useState([]);

  const handleLogin = () => {
    setUsername({ name: "rohan", isAuthenticated: true });
  };
  const handleSignout = () => {
    setUsername({ name: "", isAuthenticated: false });
  };

  const addItem = (item) => {
    const itemId = uuidv4();
    setShoppingList((prev) => [...prev, { id: itemId, name: item }]);
  };

  const removeItem = (itemId) => {
    setShoppingList(shoppingList.filter((item) => item.id != itemId));
  };

  const clearList = () => {
    setShoppingList([]);
  };

  return (
    <AppContext.Provider
      value={{
        username,
        handleLogin,
        handleSignout,
        shoppingList,
        addItem,
        removeItem,
        clearList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
