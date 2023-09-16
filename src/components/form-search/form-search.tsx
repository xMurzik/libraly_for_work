import React, { useState } from 'react';
import SearchInput from '../search-input/search-input';
import SelectSortBy from '../select-sort-by/select-sort-by';
import SelectSortByCategories from '../select-sort-by-categories/select-sort-by-categories';
import { Category, SortingBy } from '../../consts/common';
import s from './form-search.module.scss';

const FormSearch: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [categories, setCategories] = useState<string>(Category.all);
  const [sortBy, setSortBy] = useState<string>(SortingBy.relevance);

  return (
    <div className={s.containerFrom}>
      <SearchInput
        sortBy={sortBy}
        categories={categories}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className={s.selectors}>
        <SelectSortByCategories
          categories={categories}
          setCategories={setCategories}
        />
        <SelectSortBy sortBy={sortBy} setSortBy={setSortBy} />
      </div>
    </div>
  );
};

export default FormSearch;
