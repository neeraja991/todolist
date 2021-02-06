import React, { useState, useEffect } from "react";
//import { data } from "./data";
const url = "http://localhost:3000/Todos";

const UseEffectFetchData = () => {
    
  const [todo, setTodo] = useState([]);
  
  const getTodos = async () => {
    const response = await fetch(url);
    const todos = await response.json();
    setTodo(todos);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const removeItem = id => {
    let newTodo = todo.filter(list => list.id !== id);
    setTodo(newTodo);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#236778"
        }}
      >
        <div>
          <h3>ToDo List</h3>
          <ul className="users">
            {todo.map(list => {
              const { id, Desc, isCompleted } = list;

              return (
                <ul key={id} className="todos">
                  <h4 onClick={() => changeItem(isCompleted)}>{Desc}</h4>
                  <button onClick={() => removeItem(id)}>Remove</button>
                </ul>
              );
            })}

            <button className="btn" onClick={() => setTodo([])}>
              Clear Items
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UseEffectFetchData;
