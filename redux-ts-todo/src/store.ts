import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import rootReducer from "./reducer";

const middlewares = [...getDefaultMiddleware()];
middlewares.push(logger);

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares
});

export type AppDispatch = typeof store.dispatch;

export default store;
