const initialState = {
  todos: [
    {
      id: 1,
      todo: "Try adding some todos, just start typing",
      completed: false,
    },
    {
      id: 2,
      todo: "You can edit, delete or mark complete",
      completed: true,
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "todo/add":
      return { ...state, todos: [...state.todos, action.payload] };
    case "todo/delete":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "todo/complete":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
    case "todo/edit":
      return {
        ...state,
        todos: state.todos.map((todoItem) =>
          todoItem.id === action.payload.id
            ? { ...todoItem, todo: action.payload.todo }
            : todoItem,
        ),
      };
    default:
      return state;
  }
}

export function addTodo(newTodo) {
  return { type: "todo/add", payload: newTodo };
}
export function deleteTodo(id) {
  return { type: "todo/delete", payload: id };
}
export function completeTodo(id) {
  return { type: "todo/complete", payload: id };
}
export function editTodo(id, todoText) {
  return { type: "todo/edit", payload: { id, todo: todoText } };
}
