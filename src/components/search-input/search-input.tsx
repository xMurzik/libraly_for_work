import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import s from './search-input.module.scss';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { fetchBooks } from '../../store/books-slice/async-books';
import {
  setSortBy,
  setSortByCategories,
  setValueInput,
} from '../../store/books-slice/books-slice';

interface ISeatchInput {
  searchValue: string;
  sortBy: string;
  categories: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<ISeatchInput> = ({
  searchValue,
  sortBy,
  categories,
  setSearchValue,
}) => {
  const dispatch = useAppDispatch();

  const onKeyDownDoFetch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && document.activeElement?.id === 'input_search') {
      dispatch(setValueInput(searchValue));
      dispatch(setSortByCategories(categories));
      dispatch(setSortBy(sortBy));
      dispatch(fetchBooks());
    }
  };

  const onClickIcon = () => {
    dispatch(setValueInput(searchValue));
    dispatch(setSortByCategories(categories));
    dispatch(setSortBy(sortBy));
    dispatch(fetchBooks());
  };
  return (
    <div className={s.wrapper}>
      <input
        onKeyDown={onKeyDownDoFetch}
        id="input_search"
        placeholder="Type some book name"
        className={s.searchInput}
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <AiOutlineSearch onClick={onClickIcon} className={s.icon} />
    </div>
  );
};

export default SearchInput;
