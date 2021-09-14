import QuoteList from "../components/quotes/QuoteList";
import { useSelector, useDispatch } from "react-redux";
import { quotesAction } from "../store/quote/slice";
import { Redirect } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { reqGetAllQuotes } from "../lib/api";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuotesList = () => {
  const itemsQuotes = useSelector((state) => state.quote.items);
  const { sendRequest, status, data, error } = useHttp(reqGetAllQuotes, true);
  const [IsLoad, setIsLoad] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (itemsQuotes.length === 0) {
      if (status === "pending") {
        sendRequest();
      } else if (status === "completed") {
        dispatch(quotesAction.SET_ITEMS(data));
        setIsLoad(true);
      }
    }
  }, [sendRequest, status, data, error, dispatch, itemsQuotes.length]);

  if (status === "pending") {
    if (itemsQuotes.length === 0) {
      return (
        <div className="centered">
          <LoadingSpinner />
        </div>
      );
    }
  }

  return (
    <section>
      {itemsQuotes.length ? (
        <QuoteList quotes={[...itemsQuotes]} />
      ) : (
        IsLoad && <Redirect to="/no-quotes" />
      )}
    </section>
  );
};

export default QuotesList;
