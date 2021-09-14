import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <div>
      {keys.map((item, index) => (
        <button className={s.button} key={index} name={item} onClick={onLeaveFeedback}>
          {item}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
