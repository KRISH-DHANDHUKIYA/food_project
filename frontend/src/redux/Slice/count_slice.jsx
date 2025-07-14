// import { createSlice } from "@reduxjs/toolkit";

// const Signuplogin = createSlice({
//     name: "login",
//     initialState: {
//         isSignup: false
//     },
//     reducers: {
//         changeState: (state) => {
//             state.isSignup = !state.isSignup;
//         }
//     }
// });

// export const { changeState } = Signuplogin.actions;
// export default Signuplogin.reducer;



import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSignup: false,
};

const countSlice = createSlice({
    name: 'Signup',
    initialState,
    reducers: {
        changeState: (state) => {
            state.isSignup = !state.isSignup;
        },
    },
});

export const { changeState } = countSlice.actions;
export default countSlice.reducer;
