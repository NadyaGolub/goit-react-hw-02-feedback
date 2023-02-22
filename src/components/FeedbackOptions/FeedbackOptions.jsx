import React from 'react';
import PropTypes from 'prop-types';
import { Btn, List } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);

  return (
    <List>
      {keys.map(key => (
        <li key={key}>
              <Btn
                  key={key}
                  type="button"
                  name={key}
                  onClick={onLeaveFeedback}>
            {key}
          </Btn>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.number).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;