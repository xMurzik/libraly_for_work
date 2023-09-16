import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../store';
import { API_KEY, MAIN_URL } from '../../consts/api';
import { setError } from './books-slice';
import { IBooks } from '../../types/books';

export const fetchBooks = createAsyncThunk<
  IBooks,
  undefined,
  { dispatch: AppDispatch; state: State }
>('offers/fetchOffers', async (_, { dispatch, getState }) => {
  try {
    const res = await fetch(
      `${MAIN_URL}?q=${getState().books.valueInput}+subject:${
        getState().books.sortByCategories
      }&maxResults=${getState().books.maxCountBooks}&orderBy=${
        getState().books.sortBy
      }&key=${API_KEY}`
    );

    if (!res.ok) {
      throw Error('Errro');
    }

    const ans = await res.json();
    console.log(ans);
    return ans;
  } catch {
    dispatch(setError());
  }
});
