import React, { useEffect, useState, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [MovieList, setMovieList] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [ErrorRequest, setErrorRequest] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setErrorRequest(null);

    try {
      const response = await fetch(
        "https://learn-react-new-default-rtdb.firebaseio.com/movies.json"
      );
      const data = await response.json();

      const loadedData = Object.keys(data).map((res) => ({
        id: res,
        openingText: data[res].openingText,
        releaseDate: data[res].releaseDate,
        title: data[res].title,
      }));
      setMovieList(loadedData);
    } catch (error) {
      setErrorRequest(error.message);
    }

    setIsLoading(false);
  }, []);

  const addMovieHandler = async (movie) => {
    try {
      const response = await fetch(
        "https://learn-react-new-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      fetchMovieHandler();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  return (
    <React.Fragment>
      <section>{<AddMovie onAddMovie={addMovieHandler} />}</section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!IsLoading && MovieList.length > 0 && (
          <MoviesList movies={MovieList} />
        )}
        {!IsLoading && !ErrorRequest && MovieList.length === 0 && (
          <p>Movie Not Found</p>
        )}
        {IsLoading && <p>Loading...</p>}
        {ErrorRequest && <p>{ErrorRequest}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
