import React, { useState } from "react";

function App() {
  const [item, update_item] = useState("");
  const [list, list_items] = useState([]);

  function handlechange(event) {
    const valuee = event.target.value;
    update_item(valuee);
  }
  function add_item() {
    list_items((prevItems) => {
      return [...prevItems, item];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={item} onChange={handlechange} />
        <button onClick={add_item}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((todo) => {
            return <li>{todo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
