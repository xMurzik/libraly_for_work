import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category, SortingBy } from '../../consts/common';
import { IBooks } from '../../types/books';
import { fetchBooks, fetchMoreBooks } from './async-books';

interface IBooksSlice {
  booksList: IBooks | null;
  sortBy: SortingBy | string;
  sortByCategories: Category | string;
  valueInput: string;
  isLoading: boolean;
  booksPage: number;
  isError: boolean;
}

const initialState: IBooksSlice = {
  booksList: null,
  sortBy: SortingBy.relevance,
  sortByCategories: Category.all,
  valueInput: '',
  isLoading: false,
  booksPage: 0,
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
    setNextPage: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.booksPage = 0;
        return;
      }
      state.booksPage += 1;
    },
    setError: (state, action: PayloadAction<boolean | undefined>) => {
      if (action.payload) {
        state.isError = false;
        return;
      }

      state.isError = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.booksList = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchMoreBooks.pending, (state) => {
        state.isError = false;
      })
      .addCase(fetchMoreBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.items) {
          if (state.booksList?.items) {
            if (
              state.booksList.items.length + 30 !==
              state.booksList.totalItems
            ) {
              state.booksList.items = [
                ...state.booksList.items,
                ...action.payload.items,
              ];
              return;
            }
          }
        }
      });
  },
});

export default booksSlice.reducer;
export const {
  setNextPage,
  setSortBy,
  setValueInput,
  setSortByCategories,
  setError,
} = booksSlice.actions;
