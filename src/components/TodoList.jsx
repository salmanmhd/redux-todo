import TodoItem from "./TodoItem";
import "../App.css";

function TodoList({ todos }) {
  return (
    <div className="todolist custom-scrollbar h-[32.2rem] w-[45rem] overflow-y-auto">
      {todos.map((el, i) => {
        return <TodoItem key={i} todo={el} />;
      })}
    </div>
  );
}

export default TodoList;
