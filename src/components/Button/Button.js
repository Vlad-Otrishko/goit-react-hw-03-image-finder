import React from 'react';
import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({handleClick}) => {
  return (
    <div className={s.wrapper}>
      <button type="button" className={s.Button} onClick={handleClick}>
        Load more
      </button>
      <div className={s.returnButton}>
        <a href="#home" className={s.returnButtonLink}>
          Back
        </a>
      </div>
    </div>
  );
};
export default Button;

Button.propTypes = {
  handleClick: PropTypes.func,
};

