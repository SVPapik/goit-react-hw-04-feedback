import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';

const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const [totalVotes, setTotalVotes] = useState({ total: 0 });
  const [rate, setRate] = useState({ percentage: 0 });

  const onLeaveFeedback = option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
    setTotalVotes(() => ({ total: total + 1 }));
    const percent = +Math.round((good / total) * 100);
    setRate(() => ({ percentage: percent }));
  };

  const options = Object.keys(state);
  const { good, neutral, bad } = state;
  const { total } = totalVotes;
  const { percentage } = rate;
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
            positivePercentage={percentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};

export default App;
