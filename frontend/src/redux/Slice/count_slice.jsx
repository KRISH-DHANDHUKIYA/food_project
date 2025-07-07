// import { createSlice } from "@reduxjs/toolkit"

// const Signuplogin = createSlice({
//     name: "login",
//     initialState: {
//         isSignup: false
//     },
//     reducers: {
//         changeState: (state, action) => {
//             state.isSignup = !state.isSignup
//         }
//     }
// })

// export const { changeState } = Signuplogin.actions
// export default Signuplogin.reducer

import { createSlice } from "@reduxjs/toolkit"

const Signuplogin = createSlice({
    name: "login",
    initialState: {
        isSignup: null // null = none open, true = Signup open, false = Login open
    },
    reducers: {
        openSignup: (state) => {
            state.isSignup = true;
        },
        openLogin: (state) => {
            state.isSignup = false;
        },
        closeModal: (state) => {
            state.isSignup = null;
        }
    }
});

export const { openSignup, openLogin, closeModal } = Signuplogin.actions;
export default Signuplogin.reducer;
