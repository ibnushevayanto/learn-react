import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { useEffect, useState } from "react";
import {
  useParams,
  Route,
  Redirect,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Comments from "../components/comments/Comments";
import { reqDetailQuotes } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  const { sendRequest, status, data, error } = useHttp(reqDetailQuotes, true);

  const match = useRouteMatch();
  const [isNotFound, setisNotFound] = useState(false);

  useEffect(() => {
    if (status === "pending") {
      sendRequest(params.id);
    } else if (status === "completed") {
      if (!data) {
        setisNotFound(true);
      }
    }
  }, [sendRequest, status, data, error, params.id]);

  if (isNotFound) {
    return <Redirect to="/no-quotes" />;
  }

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    status === "completed" && (
      <section>
        <HighlightedQuote text={data.text} author={data.author} />

        <Route path={match.path} exact>
          <div className="centered">
            <Link className="btn--flat" to={`${match.url}/comments`}>
              Load Comment
            </Link>
          </div>
        </Route>

        <Route path={`${match.path}/comments`}>
          <Comments comments={[]} />
        </Route>
      </section>
    )
  );
};

export default QuoteDetail;
