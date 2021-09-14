import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import QuotesList from "./pages/QuotesList";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

/**
 * Meload komponen dengan cara lazy loading
 */
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NoQuotes = React.lazy(() => import("./pages/NoQuotes"));
const AddQuote = React.lazy(() => import("./pages/AddQuote"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <QuotesList />
          </Route>
          <Route path="/quotes/detail/:id">
            <QuoteDetail />
          </Route>
          <Route path="/no-quotes">
            <NoQuotes />
          </Route>
          <Route path="/add-quote">
            <AddQuote />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
