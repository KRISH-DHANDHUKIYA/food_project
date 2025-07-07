import { createSlice } from "@reduxjs/toolkit";

const Signuplogin = createSlice({
    name: "login",
    initialState: {
        isSignup: false
    },
    reducers: {
        changeState: (state) => {
            state.isSignup = !state.isSignup;
        }
    }
});

export const { changeState } = Signuplogin.actions;
export default Signuplogin.reducer;

