import React, { useState } from 'react';

const ExpentsForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input onChange={titleChangeHandler} id="title" />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            onChange={amountChangeHandler}
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            onChange={dateChangeHandler}
            id="date"
            type="date"
            min="2019-01-01"
            max="2025-01-01"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpentsForm;
