import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Macbook Pro",
      amount: 2000,
      id: "first-01",
      date: new Date(),
    },
    {
      title: "Toilet Paper",
      amount: 10.2,
      id: "first-02",
      date: new Date(),
    },
    {
      title: "Burger",
      amount: 14,
      id: "first-03",
      date: new Date(),
    },
  ]);

  const addNewExpenseHandler = (value) => {
    const initValue = { ...value, amount: +value.amount, id: Math.random() };
    setExpenses((prevExpenses) => [initValue, ...prevExpenses]);
  };

  /**
   * Dari Begini
   */

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started"),
  //   React.createElement(Expenses, { data })
  // );

  /**
   * Menjadi Seperti Dibawah Ini :
   */
  return (
    <div>
      <NewExpense addNewExpense={addNewExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
