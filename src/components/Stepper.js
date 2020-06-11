import React, { Component } from 'react';

export default class Stepper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: 0
    }
  }

  onChange = (event) => {
    const newValue = event.target.value;
    this.setState({ inputValue: newValue })
  }

  negativeClick = () => {
    this.setState({ inputValue: this.state.inputValue - 1 });
  }
  
  positiveClick = () => {
    this.setState({ inputValue: this.state.inputValue + 1 });
  }

  render() {
    return (
      <div>
        <button className="negativeButton" onClick={ this.negativeClick } >
          down
        </button>

        <input type="number" value={ this.state.inputValue } onChange={ this.onChange } />
        
        <button className="positiveButton" onClick={ this.positiveClick } >
          up
        </button>
      </div>
    )
  }
}