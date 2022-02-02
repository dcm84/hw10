import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    price: '',
    id: ''
};

export const serviceEditSlice = createSlice({
    name: 'serviceEdit',
    initialState,
    reducers: {
        changeEditFormField: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        setEditForm: (state, action) => {
            return action.payload;
        },
        cleanEditForm: (state) => {
            return {
                name: '',
                price: '',
                id: ''
            };
        },
    },
})

export const { changeEditFormField, setEditForm, cleanEditForm } = serviceEditSlice.actions
export default serviceEditSlice.reducer