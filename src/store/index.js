import { configureStore } from '@reduxjs/toolkit'
import numberSlice from './number-slice'
import resultSlice from './result-slice'
import operatorSlice from './operator-slice'

const store = configureStore({
    reducer: {
        res: resultSlice.reducer,
        num: numberSlice.reducer,
        op: operatorSlice.reducer
    }
})

export default store
