import React from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import { getStatusError } from '../../store/books-slice/book-selectors';
import s from './select-sort.module.scss';

interface ISelectSort {
  spanValue: string;
  arrOfVal: Array<string>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const SelectSort: React.FC<ISelectSort> = ({
  setSortBy,
  sortBy,
  spanValue,
  arrOfVal,
}) => {
  const isError = useAppSelector(getStatusError);
  return (
    <div className={s.wrapper}>
      <span className={s.category}>{spanValue}</span>
      <select
        disabled={isError}
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className={s.selectSort}
      >
        {arrOfVal.map((el, id) => (
          <option key={`${el} ${id}`} value={el}>
            {el === '' ? 'all' : el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectSort;
