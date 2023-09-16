import React from 'react';
import FormSearch from '../../components/form-search/form-search';
import BooksList from '../../components/books-list/books-list';
import s from './main.module.scss';

const Header: React.FC = () => {
  return (
    <>
      <div className={s.containerHeader}>
        <div className={s.formWrapper}>
          <h1 className={s.titleProject}>Search for books</h1>
          <FormSearch />
        </div>
      </div>
      <BooksList />
    </>
  );
};

export default Header;
