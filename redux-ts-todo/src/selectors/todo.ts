import { RootState } from "@/reducer";

export const todoListSelector = (state: RootState) => {
  return state.todo.list;
};
