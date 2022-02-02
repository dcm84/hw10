import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filter: ''
};

export const serviceFilterSlice = createSlice({
    name: 'serviceFilter',
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.filter = action.payload;
        }
    },
})

export const { changeFilter } = serviceFilterSlice.actions
export default serviceFilterSlice.reducer