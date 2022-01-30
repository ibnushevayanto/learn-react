import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { reqSimpanQuotes } from "../lib/api";
import { useHistory } from "react-router-dom";

const AddQuote = () => {
  const { sendRequest, ...response } = useHttp(reqSimpanQuotes);
  const history = useHistory();

  const addQuoteHandler = async (value) => {
    await sendRequest(value);
    if (!response.error) {
      history.push("/quotes");
    }
  };

  return (
    <section> 
      <QuoteForm onAddQuote={addQuoteHandler} />
    </section>
  );
};
export default AddQuote;
