import { useState, useEffect, useCallback } from "react";
import useHttp from "../../hooks/use-http";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { getComments } from "../../lib/api";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, status, error, data } = useHttp(getComments, true);
  const params = useParams();
  const functionRequest = useCallback(() => {
    sendRequest(params.id);
  }, [params.id, sendRequest]);

  useEffect(() => {
    if (status === "pending") {
      functionRequest();
    }
  }, [status, functionRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  console.log(data);

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm functionRequest={functionRequest} setIsAddingComment={setIsAddingComment} />
      )}
      <CommentsList comments={data} />
    </section>
  );
};

export default Comments;
