import React from 'react';
import s from './load-more-button.module.scss';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { fetchMoreBooks } from '../../store/books-slice/async-books';

const LoadMoreButton: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => {
        dispatch(fetchMoreBooks());
      }}
      className={s.buttonMore}
    >
      Load more
    </button>
  );
};

export default LoadMoreButton;
