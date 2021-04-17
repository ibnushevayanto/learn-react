import React from "react";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  storeData,
  removeData,
} from "../../store/actions/index";
class Counter extends React.Component {
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
  onIncrementAction: (value) => dispatch(increment(value)),
  onDecrementAction: (value) => dispatch(decrement(value)),
  onStoreDataAction: (value) => dispatch(storeData(value)),
  onRemoveDataAction: (index) => dispatch(removeData(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
