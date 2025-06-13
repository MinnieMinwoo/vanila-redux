import { configureStore } from "@reduxjs/toolkit";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action: { type: string }) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = configureStore({
  reducer: countModifier,
});

const onChange = () => {
  if (number) number.innerText = countStore.getState().toString();
};

countStore.subscribe(onChange);

const handleAdd = () => countStore.dispatch({ type: ADD });
const handleMinus = () => countStore.dispatch({ type: MINUS });

add?.addEventListener("click", handleAdd);
minus?.addEventListener("click", handleMinus);
export {};
