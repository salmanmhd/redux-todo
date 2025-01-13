import { createStore } from "redux";
import reducer, { addTodo } from "./features/todoSlice.js";
const store = createStore(reducer);
export default store;

const newTodo = { todo: "this is just a new todo", completed: false, id: 67 };

store.dispatch(addTodo(newTodo));
