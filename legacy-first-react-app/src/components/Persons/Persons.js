import React from "react";
import Person from "./Person/Person";
const persons = ({ data, deletePersonHandler, switchNameHandler }) =>
  data.map((res, index) => 
    <Person
      name={res.name}
      key={res.id}
      changed={(e) => switchNameHandler(e, index)}
      click={() => deletePersonHandler(index)}
      age={res.age}
    />
  );
export default persons;
