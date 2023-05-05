import { createSlice } from '@reduxjs/toolkit'

const operatorSlice = createSlice({
    name: 'operator',
    initialState: {operator: null},
    reducers: {
        setOperator(state, action) {
            state.operator = action.payload;
        }
    }
})

export const operatorActions = operatorSlice.actions;

export default operatorSlice;