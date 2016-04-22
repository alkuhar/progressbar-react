import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from './ProgressBar';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 10
    }
  }
  componentDidMount() {
    var self = this;
    var id = window.setInterval(function () {
      self.setState({
        value: self.state.value + (Math.random() * 10)
      });
      if (self.state.value > 99) {
        window.clearInterval(id);
      };
    }, 300);
  }
  render() {
    return (
      <div>
        <ProgressBar value={this.state.value} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
