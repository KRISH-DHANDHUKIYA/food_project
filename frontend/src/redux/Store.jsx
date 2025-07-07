import { configureStore } from "@reduxjs/toolkit";
import Signupreducer from "./Slice/count_slice"

const store = configureStore({
    reducer: {
        Signup: Signupreducer
    }
})

export default store