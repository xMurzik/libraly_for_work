import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../store';
import { API_KEY, MAIN_URL } from '../../consts/api';
import { setError, setNextPage } from './books-slice';
import { IBooks } from '../../types/books';

export const fetchBooks = createAsyncThunk<
  IBooks,
  undefined,
  { dispatch: AppDispatch; state: State }
>('books/fetchBooks', async (_, { dispatch, getState }) => {
  dispatch(setNextPage(true));

  const res = await fetch(
    `${MAIN_URL}?q=${getState().books.valueInput}+subject:${
      getState().books.sortByCategories
    }&maxResults=30&startIndex=${0}&orderBy=${
      getState().books.sortBy
    }&key=${API_KEY}`
  );

  if (!res.ok) {
    throw Error('Error');
  }

  const ans = await res.json();

  return ans;
});

export const fetchMoreBooks = createAsyncThunk<
  IBooks,
  undefined,
  { dispatch: AppDispatch; state: State }
>('books/fetchMoreBooks', async (_, { dispatch, getState }) => {
  dispatch(setNextPage(false));

  try {
    const res = await fetch(
      `${MAIN_URL}?q=${getState().books.valueInput}+subject:${
        getState().books.sortByCategories
      }&maxResults=30&startIndex=${getState().books.booksPage * 30}&orderBy=${
        getState().books.sortBy
      }&key=${API_KEY}`
    );

    if (!res.ok) {
      throw new Error('Error');
    }

    const ans = await res.json();

    return ans;
  } catch {
    dispatch(setError());
  }
});
