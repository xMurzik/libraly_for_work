import React from 'react';
import { VolumeInfo } from '../../types/books';
import s from './one-book.module.scss';

interface IOneBook extends VolumeInfo {}

const OneBook: React.FC<IOneBook> = ({
  authors,
  categories,
  imageLinks,
  title,
}) => {
  return (
    <div className={s.oneBook}>
      <img
        className={s.bookImg}
        src={
          imageLinks ? imageLinks.thumbnail : '../../../public/barretr_Book.png'
        }
        alt={title}
      />
      <p className={s.categories}>{categories?.[0]}</p>
      <h2 className={s.title}>{title}</h2>
      <div className={s.authors}>
        {authors
          ? authors.map((el, id) => (
              <span className={s.oneAuthor} key={`${el + id}`}>
                {el} {authors.length - 1 === id ? '' : ','}
              </span>
            ))
          : ''}
      </div>
    </div>
  );
};

export default OneBook;
