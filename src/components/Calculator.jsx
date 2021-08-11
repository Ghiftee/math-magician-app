/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../logic/calculate';
import '../logic/operate';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      operation: null,
      next: null,
      total: null,
    };
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(e) {
    const buttonName = e.target.innerText;
    const result = calculate(this.state, buttonName);
    this.setState((previousState) => {
      const { operation, next, total } = previousState;
      return {
        operation: ((result.operation === undefined) ? operation : result.operation),
        next: ((result.next === undefined) ? next : result.next),
        total: ((result.total === undefined) ? total : result.total),
      };
    });
  }

  render() {
    const { next, total } = this.state;
    return (
      <div id="calculator">
        <input className="text-right border-0 bg-gray text-white p-1 py-3 w-100" value={next || (total || 0)} readOnly />
        <div className="buttons d-grid bg-gray">
          <button type="button" onClick={this.buttonClicked}>AC</button>
          <button type="button" onClick={this.buttonClicked}>+/-</button>
          <button type="button" onClick={this.buttonClicked}>%</button>
          <button className="bg-warning" type="button" onClick={this.buttonClicked}>÷</button>
          <button type="button" onClick={this.buttonClicked}>7</button>
          <button type="button" onClick={this.buttonClicked}>8</button>
          <button type="button" onClick={this.buttonClicked}>9</button>
          <button className="bg-warning" type="button" onClick={this.buttonClicked}>x</button>
          <button type="button" onClick={this.buttonClicked}>4</button>
          <button type="button" onClick={this.buttonClicked}>5</button>
          <button type="button" onClick={this.buttonClicked}>6</button>
          <button className="bg-warning" type="button" onClick={this.buttonClicked}>-</button>
          <button type="button" onClick={this.buttonClicked}>1</button>
          <button type="button" onClick={this.buttonClicked}>2</button>
          <button type="button" onClick={this.buttonClicked}>3</button>
          <button className="bg-warning" type="button" onClick={this.buttonClicked}>+</button>
          <button id="zero-button" type="button" onClick={this.buttonClicked}>0</button>
          <button type="button" onClick={this.buttonClicked}>.</button>
          <button className="bg-warning" type="button" onClick={this.buttonClicked}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
