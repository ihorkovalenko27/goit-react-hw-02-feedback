import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../notifications/Notifications';
import s from './Statistic.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <h2 className="">Statistics</h2>
      {total ? (
        <ul className={s.statList}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      ) : (
        <Notification />
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
