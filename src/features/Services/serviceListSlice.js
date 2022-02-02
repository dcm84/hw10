import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = [
    { id: nanoid(), name: 'Замена стекла', price: 22000 },
    { id: nanoid(), name: 'Замена дисплея', price: 25000 },
];

export const serviceListSlice = createSlice({
    name: 'serviceList',
    initialState,
    reducers: {
        editService: (state, action) => {
            const { name, price, id } = action.payload;

            //Если в полях нет данных, то ничего не делаем
            if (!name || !price) return state;

            const service = state.find(service => service.id === id);
            if (service) {
                service.name = name;
                service.price = Number(price);
            }
            else state.push({ id: nanoid(), name, price: Number(price) });
        },
        removeService: (state, action) => {
            const id = action.payload;
            return state.filter(service => service.id !== id);
        },
    },
})

export const { editService, removeService } = serviceListSlice.actions
export default serviceListSlice.reducer