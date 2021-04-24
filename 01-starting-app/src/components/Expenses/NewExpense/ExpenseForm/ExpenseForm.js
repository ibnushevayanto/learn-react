import { useState, useRef } from "react";
import { formatObject } from "../../../../utility/utility";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [form, setForm] = useState({
    title: null,
    amount: null,
    date: null,
  });

  const formEl = useRef(null);

  const fieldChangeHandler = (e, propertyName) => {
    setForm((prevState) =>
      formatObject(prevState, {
        [propertyName]:
          propertyName === "date" ? new Date(e.target.value) : e.target.value,
      })
    );
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    props.addNewExpense(form);
    formEl.current.reset();
  };

  if (props.showForm) {
    return (
      <form onSubmit={submitFormHandler} ref={formEl}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={(e) => fieldChangeHandler(e, "title")}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={(e) => fieldChangeHandler(e, "amount")}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-01-01"
              required
              onChange={(e) => fieldChangeHandler(e, "date")}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.toggleForm} type="button">
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  } else {
    return (
      <button onClick={props.toggleForm} type="button">
        Add New Expense
      </button>
    );
  }
};

export default ExpenseForm;
