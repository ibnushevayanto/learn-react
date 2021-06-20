import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: nameInputValue,
    touchHandler: nameTouchHandler,
    changeHandler: nameChangeHandler,
    reset: resetNameHandler,
    isInputError: isNameInputError,
    isInputValid: isNameInputValid,
  } = useInput((value) => value.trim() === "");

  const {
    value: emailInputValue,
    touchHandler: emailTouchedHandler,
    changeHandler: emailChangeHandler,
    reset: resetEmailHandler,
    isInputError: isEmailInputError,
    isInputValid: isEmailInputValid,
  } = useInput((value) => value.trim() === "" || !value.includes("@"));

  let IsFormInvalid = false;
  if (isNameInputValid || isEmailInputValid) {
    IsFormInvalid = true;
  } else {
    IsFormInvalid = false;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    nameTouchHandler();
    emailTouchedHandler();

    if (isNameInputError && isEmailInputError) {
      return;
    }
    resetNameHandler();
    resetEmailHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${isNameInputError && "invalid"} `}>
        <label htmlFor="name">Your Name</label>
        <input
          value={nameInputValue}
          type="text"
          id="name"
          onBlur={nameTouchHandler}
          onChange={nameChangeHandler}
        />
        {isNameInputError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={`form-control ${isEmailInputError && "invalid"} `}>
        <label htmlFor="email">Email</label>
        <input
          value={emailInputValue}
          type="email"
          id="email"
          onBlur={emailTouchedHandler}
          onChange={emailChangeHandler}
        />
        {isEmailInputError && (
          <p className="error-text">Email must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={IsFormInvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
