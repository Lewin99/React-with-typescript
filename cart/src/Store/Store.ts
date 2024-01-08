export {};
// Import necessary modules from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import your root reducer(s)
import cartReducer from "../Reducers/CartReducer";

// Create the Redux store with middleware if needed
const store = configureStore({
  reducer: cartReducer,
  // Add middleware or other configuration options here if needed
});

// Export the store to use in your application
export default store;
