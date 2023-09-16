import React from 'react';
import s from './select-sort-by.module.scss';
import { SortingBy } from '../../consts/common';

interface ISelectSortBy {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const SelectSortBy: React.FC<ISelectSortBy> = ({ setSortBy, sortBy }) => {
  return (
    <div className={s.wrapper}>
      <span className={s.category}>Sorting by</span>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className={s.selectSort}
      >
        <option value={SortingBy.newest}>newest</option>
        <option value={SortingBy.relevance}>relevance</option>
      </select>
    </div>
  );
};

export default SelectSortBy;
