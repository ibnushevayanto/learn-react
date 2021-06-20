import React, { useEffect } from "react";
import useRequest from "./hooks/useRequest";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  const { isLoading, error, tasks, fetchTasks, setTasks } =
    useRequest("get_data");

  useEffect(() => {
    fetchTasks({ method: "GET" }).then((res) => {
      if (res) {
        setTasks(res);
      }
    });
  }, [fetchTasks, setTasks]);

  const taskAddHandler = (item) => {
    setTasks((prevState) => prevState.concat(item));
  };

  console.log(tasks);

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
