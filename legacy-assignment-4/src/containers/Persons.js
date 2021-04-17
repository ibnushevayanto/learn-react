import React from "react";
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPersons/AddPersons";
import { connect } from "react-redux";
import * as actionType from "../store/actions";

class Persons extends React.Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddDataHandler} />
        {this.props.data.map((res, index) => (
          <Person
            name={res.nama}
            age={res.age}
            key={index}
            clicked={() => this.props.onRemoveHandler(index)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapActionToProps = (dispatch) => ({
  onAddDataHandler: (value) => dispatch({ type: actionType.ADD_DATA, value }),
  onRemoveHandler: (index) => dispatch({ type: actionType.REMOVE_DATA, index }),
});

export default connect(mapStateToProps, mapActionToProps)(Persons);
