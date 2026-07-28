import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //vanilla redux- dont mutate the state

    //redux toolkit- we have to mutate the sate
    //mutatting the state here
    // redux toolkit uses immer BTS to mutate the state
    addItem: (state, actions) => {
      state.items.push(actions.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    // orginalState= Items["pizza"]
    clearCart: (state) => {
      // RTK = either mutate the OriginalState or return new state
      //   state.items.length = 0; //originalState = []
      return { items: [] }; //this new object will be replaced inside the originalState = {items:[]}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
