// import { configureStore } from "@reduxjs/toolkit";
// import Signupreducer from "./Slice/count_slice"

// const store = configureStore({
//     reducer: {
//         Signup: Signupreducer
//     }
// })

// export default store

// redux/Store.jsx
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./Slice/count_slice";

export const store = configureStore({
  reducer: {
    Signup: countReducer,
  },
});
