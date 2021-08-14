import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const changeTitle = () => {
    setTitle("changed");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">${props.amount.toFixed(2)}</div>
        <button onClick={changeTitle}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
