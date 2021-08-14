import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.data.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <div className="expenses-list">
      {props.data.map((res) => (
        <ExpenseItem
          key={res.id}
          title={res.title}
          amount={+res.amount}
          date={res.date}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
