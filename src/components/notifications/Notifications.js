import React from 'react';
import PropTypes from 'prop-types';
import s from './Notifications.module.css';

const Notification = ({ message }) => <p className={s.message}>{message}</p>;

Notification.defaultProps = {
  message: 'No feedback given',
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
