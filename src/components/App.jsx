import { useState, useEffect } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';

const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const [total, setTotal] = useState(0);
  const [rate, setRate] = useState(0);

  const { good, neutral, bad } = state;
  const options = Object.keys(state);

  const onLeaveFeedback = option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
    setTotal(() => total + 1);
  };

  useEffect(() => {
    setRate(Math.round((good / total) * 100));
  }, [good, total]);

  return (
    <div className="widget-container">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {!!total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={rate}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};

export default App;
