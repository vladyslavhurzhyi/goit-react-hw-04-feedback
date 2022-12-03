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
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  updateFeedback = nameSt => {
    this.setState(prevState => ({
      [nameSt]: prevState[nameSt] + 1,
    }));
  };

  render() {
    const nameBtn = ['good', 'neutral', 'bad'];
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={nameBtn}
            onLeaveFeedback={this.updateFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() <= 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
