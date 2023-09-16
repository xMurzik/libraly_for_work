import React from 'react';
import { Category } from '../../consts/common';
import s from './select-sort-by-categories.module.scss';

interface ISelectSortByCategories {
  categories: string;
  setCategories: React.Dispatch<React.SetStateAction<string>>;
}

const SelectSortByCategories: React.FC<ISelectSortByCategories> = ({
  categories,
  setCategories,
}) => {
  return (
    <div className={s.wrapper}>
      <span className={s.category}>Categories</span>
      <select
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        className={s.selectSort}
      >
        <option value={Category.all}>all</option>
        <option value={Category.art}>art</option>
        <option value={Category.biography}>biography</option>
        <option value={Category.computers}> computers</option>
        <option value={Category.history}> history</option>
        <option value={Category.medical}> medical</option>
        <option value={Category.poetry}> poetry</option>
      </select>
    </div>
  );
};

export default SelectSortByCategories;
