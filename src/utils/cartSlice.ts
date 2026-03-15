import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { MenuItemCard } from "../types/menu";

interface CartState {
    items: MenuItemCard[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state,action: PayloadAction<MenuItemCard>) => {
            // mutating the state
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;