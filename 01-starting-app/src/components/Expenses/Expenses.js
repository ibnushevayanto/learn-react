import { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList/ExpensesList";
import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState(2021);

  const onChangeFilter = (e) => {
    setFilterYear(+e.target.value);
  };
  const data = props.data.filter(
    (res) => res.date.getFullYear() === filterYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={onChangeFilter}
        defaultValue={filterYear}
      />
      <ExpensesChart expenses={data} />
      <ExpensesList data={data} filterYear={filterYear} />
    </Card>
  );
}

export default Expenses;
