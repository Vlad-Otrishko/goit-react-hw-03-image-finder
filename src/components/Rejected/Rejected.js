import React from 'react';
import s from './Rejected.module.css';
import PropTypes from 'prop-types';
const Rejected = ({ message }) => {

    return (<h1 className={s.rejected}>{message}</h1>
    );
}
export default Rejected;

Rejected.propTypes = {
  message: PropTypes.string,
};

