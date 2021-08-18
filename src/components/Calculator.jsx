import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../logic/operate';

export default function Calculator() {
  const [calc, setValues] = useState({
    operation: null,
    next: null,
    total: null,
    error: null,
  });
  const buttonClicked = (e) => {
    const { error } = calc;
    if (error) {
      setValues({ ...calc, error: null });
    }
    const buttonName = e.target.innerText || e.target.innerHTML;
    let result;
    try {
      result = calculate(calc, buttonName);
    } catch (err) {
      setValues({
        operation: null,
        next: null,
        total: 0,
        error: err,
      });
      return;
    }

    const { operation, next, total } = calc;
    setValues({
      operation: ((result.operation === undefined) ? operation : result.operation),
      next: ((result.next === undefined) ? next : result.next),
      total: ((result.total === undefined) ? total : result.total),
    });
  };
  const { next, total, error } = calc;
  return (
    <div id="calculator">
      <input className="text-right border-0 bg-gray text-white p-1 py-3 w-100" value={error || next || (total || 0)} readOnly />
      <div className="buttons d-grid bg-gray">
        <button type="button" onClick={buttonClicked}>AC</button>
        <button type="button" onClick={buttonClicked}>+/-</button>
        <button type="button" onClick={buttonClicked}>%</button>
        <button className="bg-warning" type="button" onClick={buttonClicked}>÷</button>
        <button type="button" onClick={buttonClicked}>7</button>
        <button type="button" onClick={buttonClicked}>8</button>
        <button type="button" onClick={buttonClicked}>9</button>
        <button className="bg-warning" type="button" onClick={buttonClicked}>x</button>
        <button type="button" onClick={buttonClicked}>4</button>
        <button type="button" onClick={buttonClicked}>5</button>
        <button type="button" onClick={buttonClicked}>6</button>
        <button className="bg-warning" type="button" onClick={buttonClicked}>-</button>
        <button type="button" onClick={buttonClicked}>1</button>
        <button type="button" onClick={buttonClicked}>2</button>
        <button type="button" onClick={buttonClicked}>3</button>
        <button className="bg-warning" type="button" onClick={buttonClicked}>+</button>
        <button id="zero-button" type="button" onClick={buttonClicked}>0</button>
        <button type="button" onClick={buttonClicked}>.</button>
        <button className="bg-warning" type="button" onClick={buttonClicked}>=</button>
      </div>
    </div>
  );
}
