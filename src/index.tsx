import { configureStore } from "@reduxjs/toolkit";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text: string) => ({
  type: ADD_TODO,
  text,
});
const deleteToDo = (id: number) => ({
  type: DELETE_TODO,
  id,
});

const reducer = (
  state = [] as { text: string; id: number }[],
  action: {
    type: string;
    text: string;
    id: number;
  }
) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.toSpliced(
        state.findIndex((todo) => todo.id === action.id),
        1
      );
    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducer,
});

store.subscribe(() => {
  console.log(store.getState());
});

const dispatchAddToDo = (text: string) => {
  store.dispatch(addToDo(text));
};

const disPatchDeleteToDo = (e: MouseEvent) => {
  const idString = (e.target as HTMLButtonElement).parentElement?.id;
  if (!idString) return;
  const id = parseInt(idString);

  store.dispatch(deleteToDo(id));
};

const paintTodos = () => {
  const toDos = store.getState();
  if (ul) ul.innerHTML = "";
  toDos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.addEventListener("click", disPatchDeleteToDo);

    li.id = todo.id.toString();
    li.innerText = todo.text;
    li.appendChild(btn);
    ul?.appendChild(li);
  });
};

store.subscribe(paintTodos);

const onSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  if (!input) return;

  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form?.addEventListener("submit", onSubmit);

export {};
