import React, { Component } from 'react';
import Section from './components/section/Section';
import FeedbackOptions from './components/feedback/FeedbackOptions';
import Statistics from './components/statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickFeedback = event => {
    const data = event.target.name;
    this.setState(prevState => ({ [data]: prevState[data] + 1 }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    return total.reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const positive = Math.round((this.state.good / this.countTotalFeedback()) * 100);
    return positive;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.clickFeedback} />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
