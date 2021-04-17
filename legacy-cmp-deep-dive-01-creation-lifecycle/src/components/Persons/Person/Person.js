import React from "react";
import classes from "./Person.css";
import withClass from "../../../hoc/withClass";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Person extends React.Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElementRef.focus()
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      /*
       ** React.Fragment Melakukan Hal Yang Sama Seperti Auxillary
       ** Di Folder HOC
       */
      <React.Fragment>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please Log in</p>
        )}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(inputElement) => {this.inputElementRef = inputElement}}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </React.Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
