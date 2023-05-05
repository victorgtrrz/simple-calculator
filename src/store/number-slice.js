import { createSlice } from '@reduxjs/toolkit'

const numberSlice = createSlice({
    name: 'number',
    initialState: {number: 0},
    reducers: {
        setNumber(state, action) {
            state.number = action.payload;
        }
    }
})

export const numberActions = numberSlice.actions;

export default numberSlice;