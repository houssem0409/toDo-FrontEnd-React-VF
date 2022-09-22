import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import authReducer from "./authSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    auth :  authReducer
  },
});
