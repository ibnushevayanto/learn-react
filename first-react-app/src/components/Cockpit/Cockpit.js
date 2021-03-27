import React from "react";
import styled from "styled-components";
import "./Cockpit.css";

const cockpit = (props) => {
  const StyleButton = styled.button`
    background-color: ${(props) => (props.isShowPersons ? "red" : "green")};
    font: inherit;
    color: white;
    padding: 8px;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: ${(props) =>
        props.isShowPersons ? "lightgreen" : "lightblue"};
    }
  `;

  const classForP = [];
  if (props.showPersons) {
    classForP.push("green", "bold");
  } else {
    classForP.push("red", "bold");
  }

  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p className={classForP.join(" ")}>This is really working!</p>
      <StyleButton
        isShowPersons={props.showPersons}
        onClick={props.togglePersonsHandler}
      >
        Toggle Persons
      </StyleButton>
    </div>
  );
};

export default cockpit;
