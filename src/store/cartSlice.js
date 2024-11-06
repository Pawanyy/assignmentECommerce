import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                } else {
                    existingItem.quantity -= 1;
                }
            }
        },
        deleteFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        emptyCart: (state) => {
            state.items = [];
        }
    },
});

export const { addToCart, removeFromCart, deleteFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
