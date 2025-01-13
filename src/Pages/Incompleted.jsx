import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import Title from "../components/Title";

function Incompleted() {
  const todos = useSelector((state) => state.todos);
  const filteredTask = todos.filter((task) => task.completed === false);
  return (
    <>
      <Header />
      <Title text={"Incomplete task"} />
      <TodoList todos={filteredTask} />
    </>
  );
}

export default Incompleted;
