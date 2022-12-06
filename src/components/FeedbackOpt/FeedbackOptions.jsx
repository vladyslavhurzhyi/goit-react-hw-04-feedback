import React from 'react';
import { Btn } from './FeedbackOtpions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(item => {
    return (
      <Btn
        key={item}
        onClick={() => {
          onLeaveFeedback(item);
        }}
      >
        {item}
      </Btn>
    );
  });
};
