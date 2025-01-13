import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import Header from "../components/Header";
import Title from "../components/Title";

function Completed() {
  const todos = useSelector((state) => state.todos);
  const filteredTask = todos.filter((task) => task.completed === true);

  return (
    <>
      <Header />
      <Title text={"Completed Tasks"} />
      <TodoList todos={filteredTask} />
    </>
  );
}

export default Completed;
