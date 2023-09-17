import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import {
  getBooksList,
  getStatusError,
  getStatusLoading,
} from '../../store/books-slice/book-selectors';
import OneBook from '../one-book/one-book';
import ButtonCustom from '../button-custom/button-custom';
import { Puff } from 'react-loader-spinner';
import {
  fetchBooks,
  fetchMoreBooks,
} from '../../store/books-slice/async-books';
import s from './books-list.module.scss';

const BooksList: React.FC = () => {
  const dispatch = useAppDispatch();

  const booksList = useAppSelector(getBooksList);
  const isLoading = useAppSelector(getStatusLoading);
  const isError = useAppSelector(getStatusError);

  const onClickLoadMore = () => {
    dispatch(fetchMoreBooks());
  };

  const onClickRefetchBooks = () => {
    dispatch(fetchBooks());
  };

  if (isError) {
    return (
      <>
        <h1 className={s.title}>Something going wrong</h1>{' '}
        <ButtonCustom onClick={onClickRefetchBooks} text="Reset" />
      </>
    );
  }

  return (
    <>
      <h1 className={s.title}>
        {booksList ? booksList.totalItems : 0} total found
      </h1>
      <div className={s.wrapper}>
        {isLoading ? (
          <Puff
            height="200"
            width="200"
            radius={1}
            color="grey"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          booksList?.items?.map((el, id) => (
            <OneBook key={`${el.id} ${id}`} id={el.id} {...el.volumeInfo} />
          ))
        )}
      </div>

      <ButtonCustom onClick={onClickLoadMore} text="Load more" />
    </>
  );
};

export default BooksList;
