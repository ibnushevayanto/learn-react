import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
// import { Component } from "react";
import { counterActions } from "../store/counter";

// * How To Use Redux In Functional Base Component

const Counter = () => {
  // * Dispatch
  const dispatch = useDispatch();

  // * Subscriber
  const counter = useSelector((state) => state.counter.counter);
  const isShowCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.INCREMENT());
  };

  const decrementHandler = () => {
    dispatch(counterActions.DECREMENT());
  };

  const increaseHandler = (amount) => {
    dispatch(counterActions.INCREASE(amount));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.TOGGLE_COUNTER());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShowCounter && <div className={classes.value}>{counter}</div>}
      <div className={classes.action}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler.bind(null, 5)}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// * How To Use Redux In Class Bassed Component

// class Counter extends Component {
//   toggleCounterHandler() {
//     this.props.toggleCounter();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   incrementHandler() {
//     this.props.increment();
//   }
//   increaseHandler(value) {
//     this.props.increase(value);
//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         {this.props.showCounter && (
//           <div className={classes.value}>{this.props.counter}</div>
//         )}
//         <div className={classes.action}>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.increaseHandler.bind(this, 5)}>
//             Increase By 5
//           </button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// * Subscriber
// const stateToProps = (state) => ({
//   counter: state.counter,
//   showCounter: state.showCounter,
// });

// // * Dispatch
// const dispatchToProps = (dispatch) => ({
//   increment: () => {
//     dispatch({ type: "INCREMENT" });
//   },
//   decrement: () => {
//     dispatch({ type: "DECREMENT" });
//   },
//   increase: (amount = 0) => {
//     dispatch({ type: "INCREASE", amount });
//   },
//   toggleCounter: () => {
//     dispatch({ type: "TOGGLE" });
//   },
// });

// export default connect(stateToProps, dispatchToProps)(Counter);
