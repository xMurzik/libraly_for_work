import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksSlice from './books-slice/books-slice';

const rootReducer = combineReducers({ books: booksSlice });

export const store = configureStore({ reducer: rootReducer });

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootReducer = ReturnType<typeof rootReducer>;
