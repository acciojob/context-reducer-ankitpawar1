import React, { useState, useContext, createContext } from "react";
import ShoppingList from "./ShoppingList";
import { AppContext } from "./AppProvider";

//test push1
const App = () => {
  const { username, handleLogin, handleSignout } = useContext(AppContext);

  return (
    <div>
      <button id="login-btn" onClick={handleLogin}>
        Login
      </button>
      <button id="signout" onClick={handleSignout}>
        Signout
      </button>
      <br />
      <p id="current-user">
        Current user:{username.name}, isAuthenticated:
        {username.isAuthenticated ? "Yes" : "No"}
      </p>
      <ShoppingList />
    </div>
  );
};

export default App;
