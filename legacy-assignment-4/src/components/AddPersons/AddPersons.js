import { useState } from "react";
import "./AddPersons.css";

const AddPersons = (props) => {
  const [state, setstate] = useState({
    form: {
      nama: null,
      age: null,
    },
  });

  const nameChangeHandler = (e) => {
    const form = { ...state.form };
    form.nama = e.target.value;
    setstate({form});
  };

  const ageChangeHandler = (e) => {
    const form = { ...state.form };
    form.age = e.target.value;
    setstate({form});
  };

  return (
    <div className="AddPerson">
      <input name="nama" type="text" onChange={nameChangeHandler}></input>
      <input name="number" type="number" onChange={ageChangeHandler}></input>
      <button onClick={() => props.personAdded(state.form)}>Add Person</button>
    </div>
  );
};

export default AddPersons;
