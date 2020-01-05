import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodoState {
  nextTodoId: number;
  list: Todo[];
}

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
    },

    toggleTodo: (state: TodoState, action: PayloadAction<number>) => {
      const id: number = action.payload;
      state.list[id].done = !state.list[id].done;
    }
  }
});

export default todoModule;
