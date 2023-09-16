import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category, SortingBy } from '../../consts/common';
import { IBooks } from '../../types/books';
import { fetchBooks } from './async-books';

interface IBooksSlice {
  booksList: IBooks | null;
  sortBy: SortingBy | string;
  sortByCategories: Category | string;
  valueInput: string;
  isLoading: boolean;
  maxCountBooks: number;
  isError: boolean;
}

const initialState: IBooksSlice = {
  booksList: null,
  sortBy: SortingBy.relevance,
  sortByCategories: Category.all,
  valueInput: '',
  isLoading: false,
  maxCountBooks: 30,
  isError: false,
};

const booksSlice = createSlice({
  name: '@books',
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<SortingBy | string>) => {
      state.sortBy = action.payload;
    },
    setSortByCategories: (state, action: PayloadAction<Category | string>) => {
      state.sortByCategories = action.payload;
    },
    setValueInput: (state, action: PayloadAction<string>) => {
      state.valueInput = action.payload;
    },
    setMaxCountBooks: (state) => {
      state.maxCountBooks += 30;
    },
    setError: (state) => {
      state.isError = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.booksList = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default booksSlice.reducer;
export const {
  setMaxCountBooks,
  setSortBy,
  setValueInput,
  setSortByCategories,
  setError,
} = booksSlice.actions;
