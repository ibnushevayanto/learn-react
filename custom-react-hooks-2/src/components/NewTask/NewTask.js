import useRequest from "../../hooks/useRequest";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { isLoading, error, fetchTasks } = useRequest("send_data");

  const enterTaskHandler = async (taskText) => {
    fetchTasks({
      method: "POST",
      parameter: { text: taskText },
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res) {
        props.onAddTask(res);
      }
    });
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
