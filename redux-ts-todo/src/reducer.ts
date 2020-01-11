import { combineReducers } from "@reduxjs/toolkit";

import todoModule from "./modules/todo";

const rootReducer = combineReducers({
  todo: todoModule.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
