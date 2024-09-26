import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

const UserForm = () => {
  const [localMsg, setLocalMsg] = useState(""); // For managing input value
  const { user, setUser } = useContext(UserContext); // Context to manage user state

  // Handle adding an item to the list
  const handleAdd = () => {
    if (user.isAuthenticated) {
      if (localMsg.trim() !== "") {
        setUser({
          ...user,
          listArr: [
            ...user.listArr,
            { id: localMsg, localMsg: localMsg }, // Using `localMsg` as unique ID for simplicity
          ],
        });
        setLocalMsg(""); // Clear the input after adding the item
      }
    } else {
      alert("User is not logged in. Please log in first.");
    }
  };

  // Handle clearing all items from the list
  const handleClear = () => {
    if (user.isAuthenticated) {
      setUser({ ...user, listArr: [] });
    } else {
      alert("User is not logged in. Please log in first.");
    }
  };

  // Handle removing a specific item from the list
  const handleRemove = (removeItem) => {
    setUser({
      ...user,
      listArr: user.listArr.filter((item) => item.id !== removeItem.id),
    });
  };

  return (
    <div>
      {/* Display the current user and authentication status */}
      <h5 id="current-user">
        Current user: {user.name}, isAuthenticated:{" "}
        {user.isAuthenticated ? "Yes" : "No"}
      </h5>

      {/* Form for login, signout, adding items */}
      <form onSubmit={(e) => e.preventDefault()}>
        <button
          id="login-btn"
          onClick={() =>
            setUser({ ...user, isAuthenticated: true, name: "Ted" })
          }
        >
          Login
        </button>

        <button
          id="signout"
          onClick={() => setUser({ ...user, isAuthenticated: false, name: "" })}
        >
          SignOut
        </button>

        {/* Input box for adding items to the list */}
        <input
          id="shopping-input"
          type="text"
          placeholder="Enter item"
          style={{ display: "block", margin: "10px 0" }}
          onChange={(e) => setLocalMsg(e.target.value)}
          value={localMsg}
        />

        {/* Add and Clear List buttons */}
        <button id="add-item" onClick={handleAdd}>
          Add
        </button>
        <button id="clear-list" onClick={handleClear}>
          Clear List
        </button>
      </form>

      {/* Display the list of items */}
      <ul>
        {user.listArr.length !== 0 &&
          user.listArr.map((item) => (
            <li key={item.id}>
              {/* Remove button with dynamic ID */}
              <button
                id={`remove-${item.id}`}
                onClick={() => handleRemove(item)}
              >
                Remove
              </button>

              {/* List item with dynamic ID */}
              <span id={`item-${item.id}`}>{item.localMsg}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserForm;
