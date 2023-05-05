import { createSlice } from '@reduxjs/toolkit'

const resultSlice = createSlice({
    name: 'result',
    initialState: {result: 0},
    reducers: {
        add(state, action) {
            state.result += action.payload;
        },
        subtract(state, action) {
            state.result -= action.payload;
        },
        multiply(state, action) {
            state.result *= action.payload;
        },
        divide(state, action) {
            state.result /= action.payload;
        },
        reset(state) {
            state.result = 0;
        }
    }
})

export const resultActions = resultSlice.actions;

export default resultSlice;