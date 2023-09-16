import { State } from '../store';

export const getStatusLoading = (state: State) => state.books.isLoading;
export const getStatusError = (state: State) => state.books.isError;
export const getBooksList = (state: State) => state.books;
export const getMaxCountBooks = (state: State) => state.books.maxCountBooks;
