import { useState, useCallback } from "react";

const useRequest = (type) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(
    async (attribute) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://learn-react-new-default-rtdb.firebaseio.com/tasks.json",
          {
            method: attribute.method,
            body: attribute.parameter
              ? JSON.stringify(attribute.parameter)
              : undefined,
            headers: attribute.headers,
          }
        );

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();

        if (type === "get_data") {
          const loadedTasks = [];

          for (const taskKey in data) {
            loadedTasks.push({ id: taskKey, text: data[taskKey].text });
          }
          setIsLoading(false);
          return loadedTasks;
        } else if (type === "send_data") {
          const generatedId = data.name;
          const createdTask = {
            id: generatedId,
            text: attribute.parameter.text,
          };
          setIsLoading(false);
          return createdTask;
        }
      } catch (err) {
        setIsLoading(false);
        setError(err.message || "Something went wrong!");
      }
    },
    [type]
  );

  return { isLoading, error, tasks, fetchTasks, setTasks };
};

export default useRequest;
