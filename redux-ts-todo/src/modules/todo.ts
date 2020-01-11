import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Todo, TodoState } from "../model/todo";

const todoInitialState: TodoState = {
  nextTodoId: 0,
  list: []
};

const todoModule = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<string>) => {
      const todo: Todo = {
        id: state.nextTodoId++,
        text: action.payload,
        done: false
      };
      state.list.push(todo);
    },

    toggleTodo: (state: TodoState, action: PayloadAction<number>) => {
      const id: number = action.payload;
      state.list[id].done = !state.list[id].done;
    }
  }
});

export default todoModule;
