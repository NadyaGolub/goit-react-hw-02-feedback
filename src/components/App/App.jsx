import React from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import { GlobalStyle } from '../GlobalStyle/GlobalStyle';
import { Container } from './App.styled';


class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = evt => {
    this.setState(prevState => ({
      [evt.target.name]: prevState[evt.target.name] + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good / total) * 100);
  }

  render() {
    const total = this.countTotalFeedback();
    const positiveFeegback = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onClick}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positiveFeegback={positiveFeegback}
            />
          )}
        </Section>
        <GlobalStyle/>
      </Container>
    );
  }
}

export default App;
