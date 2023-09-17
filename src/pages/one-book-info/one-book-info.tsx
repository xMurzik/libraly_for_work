import React from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import {
  getBooksList,
  getStatusLoading,
} from '../../store/books-slice/book-selectors';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';
import s from './one-bool-info.module.scss';

const OneBookInfo: React.FC = () => {
  const { id } = useParams();

  const booksList = useAppSelector(getBooksList);
  const statusLoading = useAppSelector(getStatusLoading);

  const currentBook = booksList?.items.find((el) => el.id === id);

  if (statusLoading && !currentBook) {
    return (
      <div className={s.mainWrapper}>
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
      </div>
    );
  }

  if (!statusLoading && !currentBook) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className={s.mainWrapper}>
      <Link className={s.linkToHome} to="/">
        Back to Main
      </Link>
      <div className={s.bookContent}>
        <div className={s.imgWrapper}>
          <img
            className={s.bookImg}
            src={
              currentBook?.volumeInfo.imageLinks
                ? currentBook?.volumeInfo.imageLinks.thumbnail
                : '/barretr_Book.png'
            }
            alt={currentBook?.volumeInfo.title}
          />
        </div>
        <div className={s.textInfoBook}>
          <div className={s.wrapperText}>
            <h1 className={s.categories}>
              {currentBook?.volumeInfo.categories?.[0]}
            </h1>
            <h1 className={s.title}>{currentBook?.volumeInfo.title}</h1>
            <div className={s.authorsContainer}>
              {currentBook?.volumeInfo.authors?.map((el) => (
                <p className={s.oneAuthor} key={el}>
                  {el}
                </p>
              ))}
            </div>
            <div className={s.description}>
              {currentBook?.volumeInfo.description ? (
                currentBook?.volumeInfo.description
              ) : (
                <h1 className={s.noDescription}>
                  No description for this book
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneBookInfo;
