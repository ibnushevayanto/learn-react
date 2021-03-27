import React, { useState } from "react";
import "./App.css";
import Persons from "./../components/Persons/Persons";
import Cockpit from "./../components/Cockpit/Cockpit";

const App = () => {
  const [dataState, dataSetState] = useState({
    persons: [
      { name: "Max", age: 28, id: "asd-1" },
      { name: "Manu", age: 29, id: "asd-2" },
      { name: "Stephanie", age: 26, id: "asa-3" },
    ],
    showPersons: false,
  });

  const togglePersonsHandler = () => {
    const doesShow = dataState.showPersons;
    dataSetState({ ...dataState, showPersons: !doesShow });
  };

  const deletePersonHandler = (index) => {
    const data = [...dataState.persons];
    data.splice(index, 1);
    dataSetState({ ...dataState, persons: data });
  };

  const switchNameHandler = (e, index) => {
    if (process.browser) {
      const personsData = [...dataState.persons];
      personsData[index].name = e.target.value;
      dataSetState({ ...dataState, persons: personsData });
    }
  };

  let persons = null;
  if (dataState.showPersons) {
    persons = (
      <div>
        <Persons
          data={dataState.persons}
          deletePersonHandler={deletePersonHandler}
          switchNameHandler={switchNameHandler}
        />
      </div>
    );
  }

  return <div className="App">
      <Cockpit showPersons={dataState.showPersons} togglePersonsHandler={togglePersonsHandler}/>
      {persons}
    </div>
  ;
};

// export default Radium(App);
export default App;
