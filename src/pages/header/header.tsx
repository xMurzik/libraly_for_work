import React from 'react';
import FormSearch from '../../components/form-search/form-search';
import s from './header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={s.containerHeader}>
      <div className={s.formWrapper}>
        <h1 className={s.titleProject}>Search for books</h1>
        <FormSearch />
      </div>
    </div>
  );
};

export default Header;
