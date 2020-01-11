import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { todoListSelector } from "../selectors/todo";
import todoModule from "../modules/todo";
import { Todo } from "../model/todo";

const TodoList: React.FC = props => {
  const todos = useSelector(todoListSelector);

  const dispatch = useDispatch();
  const toggleTodo = (id: number) => {
    dispatch(todoModule.actions.toggleTodo);
  };

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <li
          key={todo.id}
          onClick={() => {toggleTodo(todo.id)}}
          style={{
            textDecoration: `${todo.done ? "line-through" : "none"}`
          }}
        >
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
