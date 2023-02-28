import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'สวัสดีครับ รอยไถพัฒนา',
    user: [],
    it: []
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = 'Login นะครับ'
            state.user = action.payload
        },
        logout: (state) => {
            state.user = []
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, incrementByAmount } = userSlice.actions

export default userSlice.reducer