import React from 'react';
import s from './button-custom.module.scss';

interface IButtonCustom {
  onClick: () => void;
  text: string;
}

const ButtonCustom: React.FC<IButtonCustom> = ({ onClick, text }) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={s.buttonMore}
    >
      {text}
    </button>
  );
};

export default ButtonCustom;
