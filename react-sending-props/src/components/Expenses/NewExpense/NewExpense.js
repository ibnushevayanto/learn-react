import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
const NewExpense = (props) => {
  const [ShowForm, setShowForm] = useState(false);
    
  const toggleForm = () => {
      setShowForm(prevState => (!prevState))
  }
  
  return (
    <div className="new-expense">
      <ExpenseForm showForm={ShowForm} toggleForm={toggleForm} addNewExpense={props.addNewExpense} />
    </div>
  );
};

export default NewExpense;
