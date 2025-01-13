import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../features/todoSlice";

export default function TodoInput() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  function handleAddTodo(e) {
    e.preventDefault();
    if (!todoText) return;
    const newTodo = { id: v4(), todo: todoText, completed: false };
    dispatch(addTodo(newTodo));
    setTodoText("");
  }

  return (
    <form
      onSubmit={(e) => handleAddTodo(e)}
      className="mb-14 mt-10 flex items-center justify-center"
    >
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="h-12 w-[44rem] rounded-xl p-4 text-black shadow-md shadow-black"
        placeholder="What do you want to do"
        autoFocus
      />
    </form>
  );
}
