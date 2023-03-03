import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../slices/product";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
