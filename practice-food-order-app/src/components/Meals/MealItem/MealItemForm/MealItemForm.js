import { useState, forwardRef, useImperativeHandle } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../../UI/Input/Input";

const MealItemForm = forwardRef((props, ref) => {
  const [InputValue, setInputValue] = useState(1);
  const changeInputHandler = (e) => {
    const value = e.target.value;
    if (!value || value > 5 || value < 1) {
      return;
    }
    setInputValue(value);
  };

  useImperativeHandle(ref, () => ({
    value: InputValue,
  }));

  return (
    <form className={styles.form} onSubmit={props.addHander}>
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          onChange: changeInputHandler,
        }}
      />
      <button>+ Add</button>
    </form>
  );
});

export default MealItemForm;
