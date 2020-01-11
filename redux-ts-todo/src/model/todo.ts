export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface TodoState {
  nextTodoId: number;
  list: Todo[];
}
