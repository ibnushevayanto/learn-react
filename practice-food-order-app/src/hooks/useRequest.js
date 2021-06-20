import { useState, useCallback } from "react";

const useRequest = () => {
  const [Data, setData] = useState([]);
  const [Error, setError] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async (url, props) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, props);
      const data = await response.json();
      const dataMapping = Object.keys(data).map((res) => ({
        id: res,
        name: data[res].name,
        price: data[res].price,
        description: data[res].description,
      }));
      setData(dataMapping);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  return { Data, Error, fetchData, IsLoading };
};

export default useRequest;
