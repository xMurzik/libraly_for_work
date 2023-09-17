import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../store';
import { API_KEY, MAIN_URL } from '../../consts/api';
import { setError, setNextPage } from './books-slice';
import { IBooks, items } from '../../types/books';

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
  Array<items>,
  undefined,
  { dispatch: AppDispatch; state: State }
>('books/fetchMoreBooks', async (_, { dispatch, getState }) => {
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
    dispatch(setNextPage(false));
    const ans = await res.json();

    let books: Array<items> = [];

    if (ans.items) {
      const prevBooks = getState().books.booksList?.items;

      if (prevBooks) {
        books = [...prevBooks, ...ans.items];

        const arrayOfUniqIds = Array.from(new Set(books.map((el) => el.id)));

        const firstPart = arrayOfUniqIds.map((id) => {
          const book = prevBooks.find((book) => book.id === id);

          return book ? book : id;
        });

        const lastPart = firstPart.map((id) => {
          if (typeof id === 'string') {
            const book = ans.items.find((el: items) => el.id === id);

            return book ? book : id;
          }
          return id;
        });

        return lastPart as Array<items>;
      }
    }

    return ans;
  } catch {
    dispatch(setError());
  }
});
