import { configureStore } from "@reduxjs/toolkit";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text: string) => ({
  type: ADD,
  text,
});

const deleteToDo = (id: string) => ({
  type: DELETE,
  id: parseInt(id),
});

const reducer = (
  state = [] as {
    text: string;
    id: number;
  }[],

  action: {
    type: string;
    text: string;
    id?: number;
  }
) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducer,
});

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
