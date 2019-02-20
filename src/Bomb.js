import React from 'react';

export default class Bomb extends React.Component {
  state = {
    secondsLeft: this.props.initialCount
  }

  render() {
    return (
      <div>
      {this.state.secondsLeft
        ? <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        : <p>Boom!</p>}
      </div>
    )
  }
}
