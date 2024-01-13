import { configureStore } from "@reduxjs/toolkit";
import catReducer from "../Reducers/CartReducer";

const store = configureStore({
  reducer: catReducer,
});

export default store;
