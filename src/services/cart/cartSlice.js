import AddToCart from "@/components/AddToCart";
import { Getsubtotal } from "@/lib/getSubtotal";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList: [],
    subtotal: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state,action){
            console.log(action.payload)
            const updateRes = action.payload
            state.cartList = updateRes.cartList
            state.subtotal = Getsubtotal(updateRes.cartList)
        },
        removeFromCart(state,action){
            state.cartList = state.cartList.filter((item)=> item.id !== action.payload)
            state.subtotal = Getsubtotal(state.cartList)
        },
        removeAllCartItems(state){
            state.cartList = []
            state.subtotal = Getsubtotal(state.cartList)
        }
    }
})

export const {removeAllCartItems,removeFromCart,addToCart} = cartSlice.actions
export default cartSlice.reducer