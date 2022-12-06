import React, { Component } from 'react';
import { Statistics } from './Statistic/Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOpt/FeedbackOptions';
import { Notification } from './Notification';
import { Section } from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  updateFeedback = nameSt => {
    this.setState(prevState => ({
      [nameSt]: prevState[nameSt] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const nameBtn = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={nameBtn}
            onLeaveFeedback={this.updateFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {total <= 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
