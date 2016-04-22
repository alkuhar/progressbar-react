import React from 'react';

export default class ProgressBar extends React.Component {
  render() {
    return (
      <progress className="progress" value={this.props.value}  max="100" />
    );
  }
}
