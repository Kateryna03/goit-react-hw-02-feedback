import React from 'react';
import PropTypes from 'prop-types';
import styles from './Expresso.module.css';

const Expresso = ({ good, neutral, bad }) => {
  return (
    <div>
      <ul>
        <li className={styles.item}>
          <p>good:{good}</p>
        </li>
        <li className={styles.item}>
          <p>neutral:{neutral}</p>
        </li>
        <li className={styles.item}>
          <p>bad:{bad}</p>
        </li>
      </ul>
    </div>
  );
};

Expresso.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Expresso;
