import React from 'react';
import X from '@icons/x.svg?react';

const ButtonCloseModal = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="relative before:absolute before:inset-[-6px] before:content-[''] focus:outline-hidden"
    >
      <X width="32" height="32" viewBox="0 0 16 16" />
    </button>
  );
};

export default ButtonCloseModal;
