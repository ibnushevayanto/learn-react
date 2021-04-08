import React, { Component } from "react";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import * as actionsType from "../../store/actions";
class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={() => this.props.onIncrementAction()}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.props.onDecrementAction()}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onIncrementAction(5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onDecrementAction(5)}
        />
        <hr />
        <button onClick={() => this.props.onStoreDataAction(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.dataStore.map((res, index) => (
            <li
              key={index}
              onClick={() => this.props.onRemoveDataAction(index)}
            >
              {res}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ctr: state.ctr.counter,
  dataStore: state.res.dataStore,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementAction: (value) =>
    dispatch({ type: actionsType.INCREMENT, value: value || 1 }),
  onDecrementAction: (value) =>
    dispatch({ type: actionsType.DECREMENT, value: value || 1 }),
  onStoreDataAction: (value) =>
    dispatch({ type: actionsType.STORE_DATA, value }),
  onRemoveDataAction: (index) =>
    dispatch({ type: actionsType.REMOVE_DATA, index }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
