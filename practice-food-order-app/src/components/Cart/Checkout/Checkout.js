import { useState, useRef } from "react";
import classes from "./Checkout.module.css";

const isNull = (value) => value.length === 0;
const isLess5Char = (value) => value.length < 5;

const Checkout = (props) => {
  const [IsFormValid, setIsFormValid] = useState({
    name: false,
    street: false,
    postCode: false,
    city: false,
  });
  const [IsTouced, setIsTouced] = useState(false);
  const nameRef = useRef();
  const streetRef = useRef();
  const postCodeRef = useRef();
  const cityRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsTouced(true);

    const nameValue = nameRef.current.value;
    const streetValue = streetRef.current.value;
    const postCodeValue = postCodeRef.current.value;
    const cityValue = cityRef.current.value;

    const isNameError = isNull(nameValue);
    const isStreetError = isNull(streetValue);
    const isPostCodeError = isLess5Char(postCodeValue);
    const isCityError = isNull(cityValue);

    const formValidation = {
      name: !isNameError,
      street: !isStreetError,
      postCode: !isPostCodeError,
      city: !isCityError,
    };

    setIsFormValid(formValidation);

    const isValid =
      !isNameError && !isStreetError && !isPostCodeError && !isCityError;
    if (!isValid) {
      return;
    }

    props.onConfirm({
      name: nameValue,
      street: streetValue,
      postCode: postCodeValue,
      city: cityValue,
    });
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div
        className={`${classes.control} ${
          !IsFormValid.name && IsTouced && classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name </label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div
        className={`${classes.control} ${
          !IsFormValid.street && IsTouced && classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
      </div>
      <div
        className={`${classes.control} ${
          !IsFormValid.postCode && IsTouced && classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postCodeRef} />
      </div>
      <div
        className={`${classes.control} ${
          !IsFormValid.city && IsTouced && classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.batalHandler}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
