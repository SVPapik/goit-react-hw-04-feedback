import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';
// import React from 'react';

const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((total, item) => total + item);
  };

  const countPositiveFeedbackPercentage = () => {
    return +Math.round((state.good / countTotalFeedback()) * 100);
  };

  const options = Object.keys(state);
  const { good, neutral, bad } = state;
  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();
  return (
    <div className="widget-container">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};

export default App;
