import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterModule from './modules/counter';

const rootReducer = combineReducers({
  counter: counterModule.reducer,
});

const setupStore = () => {
  const middlewares = [...getDefaultMiddleware(), logger];
  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  });
  return store;
};

export default setupStore;
