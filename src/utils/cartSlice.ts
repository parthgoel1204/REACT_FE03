import { createSlice,PayloadAction, current } from "@reduxjs/toolkit"
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
            // In redux you can not read the state directly because that will be a proxy object and for reading the original state we need "current" 
            console.log(current(state));
            
            state.items.length = 0;

            // return {items:[]};
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;