import { Pencil, Trash, Circle, CircleCheckBig } from "lucide-react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo, editTodo } from "../features/todoSlice";
import { useEffect, useRef, useState } from "react";

export default function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.todo);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  function handleDelete() {
    dispatch(deleteTodo(todo.id));
  }

  function handleComplete() {
    dispatch(completeTodo(todo.id));
  }

  function handleEdit() {
    if (editedText === todo.todo) {
      setIsEditing(false);
      return;
    }

    dispatch(editTodo(todo.id, editedText));
    setIsEditing(false);
  }

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus(); // Focus the input when editing starts
    }
  }, [isEditing]);
  return (
    <div className="group mb-6 flex justify-center">
      <div
        className={`flex h-11 w-[41rem] items-center justify-between rounded-xl p-4 px-5 text-black shadow-sm shadow-black ${
          todo.completed ? "bg-gray-500 text-gray-700 line-through" : "bg-white"
        }`}
      >
        {isEditing ? (
          <input
            className="w-full border-none bg-transparent outline-none"
            type="text"
            ref={inputRef}
            value={editedText}
            onBlur={handleEdit}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEdit();
              }
            }}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <p>{todo.todo}</p>
        )}
        <div className="flex gap-x-4">
          <Pencil
            onClick={() => setIsEditing(true)}
            className="hidden cursor-pointer transition-all hover:scale-125 group-hover:block"
          />
          <Trash
            onClick={handleDelete}
            className="hidden cursor-pointer transition-all hover:scale-125 group-hover:block"
          />
          <div
            onClick={handleComplete}
            className="cursor-pointer transition-all hover:scale-125"
          >
            {todo.completed ? <CircleCheckBig /> : <Circle />}
          </div>
        </div>
      </div>
    </div>
  );
}
