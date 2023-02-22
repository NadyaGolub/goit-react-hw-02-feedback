import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positiveFeegback }) => {
  return (
    <ul>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>Positive feedback {positiveFeegback} %</Item>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeegback: PropTypes.number.isRequired,
};

export default Statistics;
