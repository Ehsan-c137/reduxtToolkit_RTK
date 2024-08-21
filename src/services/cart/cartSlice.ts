import { createSlice, current } from "@reduxjs/toolkit";

interface ICart {
   quantity: number;
   id: number;
}

const initialState = {
   cartList: [] as ICart[],
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart(state, action) {
         const { id } = action.payload;
         const cartItemIndex = state.cartList.findIndex(
            (item) => item.id === Number(id)
         );

         if (cartItemIndex === -1) {
            state.cartList.push({
               id: Number(id),
               quantity: 1,
            });
         } else {
            state.cartList[cartItemIndex].quantity += 1;
         }
      },
      removeFromCart(state, action) {
         const { id } = action.payload;
         state.cartList = state.cartList.filter((item) => item.id !== id);
      },
      reduceQuantity: (state, action) => {
         const { id } = action.payload;
         const cartItemIndex = state.cartList.findIndex(
            (item) => item.id === Number(id)
         );

         if (state.cartList[cartItemIndex].quantity >= 1) {
            state.cartList[cartItemIndex].quantity -= 1;
         }
         if (state.cartList[cartItemIndex].quantity === 0) {
            state.cartList = state.cartList.filter((item) => item.id !== id);
         }
      },
      removeAllCartItems(state) {
         state.cartList = [];
      },
   },
});

export const { removeAllCartItems, removeFromCart, addToCart, reduceQuantity } =
   cartSlice.actions;
export default cartSlice.reducer;
