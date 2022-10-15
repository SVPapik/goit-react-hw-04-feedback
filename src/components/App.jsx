import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const vote = e.target.vote;
    this.setState(prevState => ({ [vote]: prevState[vote] + 1 }));
  };

  render() {
    const options = Object.keys(this.state);
    // const { good, neutral, bad } = this.state;

    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <h2>Statistics</h2>
        <ul></ul>
      </div>
    );
  }
}

export default App;
