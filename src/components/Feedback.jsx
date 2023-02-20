import React from 'react';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(goodState => {
      return {
        good: goodState.good + 1,
      } 
    });
  };

  neutralIncrement = () => {
    this.setState(neutralState => {
      return {
        neutral: neutralState.neutral + 1,
      } 
    });
  };

   badIncrement = () => {
    this.setState(badState => {
      return {
        bad: badState.bad + 1,
      } 
    });
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.goodIncrement}>
          Good
        </button>
        <button
          type="button"
          onClick={this.neutralIncrement}
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={this.badIncrement}
        >
          Bad
        </button>
        <div>
          <h2>Statistics</h2>
          <span>Good: {this.state.good }</span>
          <span>Neutral: {this.state.neutral }</span>
          <span>Bad: {this.state.bad}</span>
        </div>
      </div>
    );
  }
}

export default Counter;
