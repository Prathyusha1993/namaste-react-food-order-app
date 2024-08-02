import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);

            //older version of writing  vanilla redux (here we are not supppose to mutate the state and returuning was mandatory)
            // const newState = [...state]
            // newState.items.push(action.payload);
            // return newState;
        },
        removeItems: (state, action) => {
            // state.items = state.items.filter((item) => item.id !== action.payload.id);
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0;
            // return{ items: [] }; //this new object will replace inside original stae
        }
    }
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;  
export default cartSlice.reducer;