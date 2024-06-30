import AddToCart from "@/components/AddToCart";
import { Getsubtotal } from "@/lib/getSubtotal";
import { createSlice,current } from "@reduxjs/toolkit";

const initialState = {
    cartList: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state,action){
            const {id} = action.payload
            const cartItemIndex = state.cartList.findIndex(item => item.id === Number(id))
            
            console.log(current(state.cartList))
            if(cartItemIndex === -1){
                state.cartList.push({
                    id: Number(id),
                    quantity: 1,
                })
            } else {                
                state.cartList[cartItemIndex].quantity += 1
                
            }
            console.log(state.cartList)
        },
        removeFromCart(state,action){
            state.cartList = state.cartList.filter((item)=> item.data.id !== action.payload)            
        },
        removeAllCartItems(state){
            state.cartList = []
        }
    }
})

export const {removeAllCartItems,removeFromCart,addToCart} = cartSlice.actions
export default cartSlice.reducer