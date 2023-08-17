import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: "login",
    initialState: {
        user: {},
        token: ""
    },
    reducers: {
        onLogin: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        onLogout: (state) => {
            state.user = {}
            state.token = ""
        }
    }
})

export const { onLogin, onLogout } = loginSlice.actions

export default loginSlice.reducer