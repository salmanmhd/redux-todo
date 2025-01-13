import { useSelector } from "react-redux";
import Header from "../components/Header";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";

function Home() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <Header />
      <TodoInput />
      <TodoList todos={todos} />
    </>
  );
}

export default Home;
