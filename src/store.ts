import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDo = createSlice({
  name: "toDosReducer",
  initialState: [] as { text: string; id: number }[],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter((todo) => todo.id !== action.payload),
  },
});

export const { add, remove } = toDo.actions;

export default configureStore({ reducer: toDo.reducer });
