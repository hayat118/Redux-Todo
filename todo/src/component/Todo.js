import React from "react";
import { useSelector } from "react-redux";

export const Todos = () => {
  const todos = useSelector((state) => state.operationsReducer);
  console.log(todos, "tttt");
  return <div>Todos</div>;
};
