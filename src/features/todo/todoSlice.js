import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1,heading:"heading", text: "hello" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        heading :action.payload.heading,
        text: action.payload.data,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo:(state,action)=>{
        state.todos.map(obj => {
            if (obj.id === action.payload.id) {
              obj.heading=action.payload.heading;
              obj.text=action.payload.data
            }})
    }
  },
});

export const { addTodo, removeTodo,editTodo } = todoSlice.actions;

export default todoSlice.reducer;
