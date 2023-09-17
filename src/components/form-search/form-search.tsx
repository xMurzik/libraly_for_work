import React, { useState } from 'react';
import SearchInput from '../search-input/search-input';
import { Category, SortingBy } from '../../consts/common';
import SelectSort from '../select-sort/select-sort';
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
        <SelectSort
          sortBy={sortBy}
          setSortBy={setSortBy}
          spanValue="Sorting by"
          arrOfVal={Object.values(SortingBy)}
        />
        <SelectSort
          sortBy={categories}
          setSortBy={setCategories}
          spanValue="Categories"
          arrOfVal={Object.values(Category)}
        />
      </div>
    </div>
  );
};

export default FormSearch;
