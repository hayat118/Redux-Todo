import React, { useState } from "react";

function Form() {
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let date = new Date();
    let time = date.getTime();

    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
  };

  return (
    <>
      <h1>Todo App Using Redux</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Enter Todo"></input>
          <button type="submit">Add Todo</button>
        </div>
      </form>
    </>
  );
}

export default Form;
