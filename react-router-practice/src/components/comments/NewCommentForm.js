import { useRef, Fragment } from "react";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import classes from "./NewCommentForm.module.css";
import { addComment } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import { useParams } from "react-router-dom";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { sendRequest, error, status } = useHttp(addComment);
  const params = useParams();

  const submitFormHandler = (event) => {
    event.preventDefault();
    sendRequest({
      parameter: { comment: commentTextRef.current.value },
      quoteId: params.id,
    });
    if (!error) {
      props.setIsAddingComment(false);
      props.functionRequest();
    }
  };

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Fragment>
      {error && <p className="centered focused">{error}</p>}
      <form className={classes.form} onSubmit={submitFormHandler}>
        <div className={classes.control} onSubmit={submitFormHandler}>
          <label htmlFor="comment">Your Comment</label>
          <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Comment</button>
        </div>
      </form>
    </Fragment>
  );
};

export default NewCommentForm;
