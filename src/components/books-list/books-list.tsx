import React from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import {
  getBooksList,
  getStatusLoading,
} from '../../store/books-slice/book-selectors';
import OneBook from '../one-book/one-book';
import LoadMoreButton from '../load-more-button/load-more-button';
import { Puff } from 'react-loader-spinner';
import s from './books-list.module.scss';

const BooksList: React.FC = () => {
  const booksList = useAppSelector(getBooksList);
  const isLoading = useAppSelector(getStatusLoading);

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
            <OneBook key={`${el.id} ${id}`} {...el.volumeInfo} />
          ))
        )}
      </div>
      <LoadMoreButton />
    </>
  );
};

export default BooksList;
