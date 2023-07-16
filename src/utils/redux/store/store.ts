import { configureStore } from "@reduxjs/toolkit";
import reducers from "../reducers/reducer";

const store = configureStore({
  reducer: {
    data: reducers.state,
  },
});

export default store;
