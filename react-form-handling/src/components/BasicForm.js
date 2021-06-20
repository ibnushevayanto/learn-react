import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() === "";
  const isEmail = (value) => !value.includes("@") || isNotEmpty(value);
  const {
    value: firstNameValue,
    touchHandler: firstNameTouchHandler,
    changeHandler: firstNameChangeHandler,
    reset: resetFirstNameHandler,
    isInputError: isFirstNameInputError,
    isInputValid: isFirstNameInputValid,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    touchHandler: lastNameTouchHandler,
    changeHandler: lastNameChangeHandler,
    reset: resetLastNameHandler,
    isInputError: isLastNameInputError,
    isInputValid: isLastNameInputValid,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    touchHandler: emailTouchHandler,
    changeHandler: emailChangeHandler,
    reset: resetEmailHandler,
    isInputError: isEmailError,
    isInputValid: isEmailValid,
  } = useInput(isEmail);

  let isFormValid = false;

  if (isFirstNameInputValid || isLastNameInputValid || isEmailValid) {
    isFormValid = false;
  } else {
    isFormValid = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    resetFirstNameHandler();
    resetLastNameHandler();
    resetEmailHandler();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={`form-control  ${isFirstNameInputError && "invalid"}`}>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameTouchHandler}
          />
          {isFirstNameInputError && (
            <p className="error-text">First name is not valid</p>
          )}
        </div>
        <div className={`form-control ${isLastNameInputError && "invalid"}`}>
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameTouchHandler}
          />
          {isLastNameInputError && (
            <p className="error-text">Last name is not valid</p>
          )}
        </div>
      </div>
      <div className={`form-control ${isEmailError && "invalid"}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailTouchHandler}
        />
        {isEmailError && <p className="error-text">Email is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
