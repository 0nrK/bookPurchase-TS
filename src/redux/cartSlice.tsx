import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import type { PayloadAction } from '@reduxjs/toolkit'
 

import { IBook, CartState } from "types/book";



const initialState : CartState = {
    cartItems: localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems'))  : [],
    totalPrice: 0,
    totalQuantity: 0
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state:CartState, action : PayloadAction<IBook>) {
            console.log(action);
            // check if item exists in state, if it is not exist add it, if it is already exist then increment the quantity 
            let isItemExist = state.cartItems.find((item : IBook) => item.id === action.payload.id)
            if (!isItemExist) {
                state.cartItems = [...state.cartItems, { ...action.payload, quantity: 1 }]
            } else {
                state.cartItems = state.cartItems.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, total:item.quantity * item.price, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }

            state.totalPrice += action.payload.price
            state.totalQuantity += 1

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            toast.success("Product added to cart", {
                position: "bottom-left",
            })


        },
        removeFromCart(state:CartState, action: PayloadAction<IBook>) {

            let isItemExist = state.cartItems.find((item) => item.id === action.payload.id)

            if (isItemExist) {
                state.cartItems = state.cartItems.map((item) => {
                    if (item.id === action.payload.id && item.quantity > 1) {
                        state.totalQuantity -= 1
                        state.totalPrice -= Number(action.payload.price)
                        toast.error("Product removed from cart", {
                            position: "bottom-left",
                        });
                        return { ...item, total: item.price * item.quantity,quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

        },
         getCartTotal(state:CartState) {
            let {total, quantity } = state.cartItems.reduce(
                (acc: any, cur: any) => {
                    const { price, quantity } = cur;
                    const itemTotal = price * quantity;

                    acc.total += itemTotal;
                    acc.quantity += quantity;

                    return cur;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed);
            state.totalQuantity = quantity;
            state.totalPrice = total; 

            /* let totalQ = 0;
            let totalA = 0;
            const temp = state.cartItems.map((items, act) => {
                const { quantity, price } = items;
                const totalPrice = price * quantity;
                totalA += totalPrice;
                totalQ += items.quantity;
                const temp = { totalA, totalQ }
                return temp;
            })
            state.totalPrice = temp.length > 0 ? temp[temp.length - 1].totalA ? temp[temp.length - 1].totalA : 0 : 0;
            state.totalQuantity = temp.length > 0 ? temp[temp.length - 1].totalQ ? temp[temp.length - 1].totalQ : 0 : 0; */
         },
        deleteFromCart(state:CartState, action: PayloadAction<IBook>) {
            state.totalQuantity -= action.payload.quantity
            state.totalPrice -= Number(action.payload.price * action.payload.quantity)
            const filteredItems = state.cartItems.filter(
                (item:IBook) => item.id !== action.payload.id
            )
            toast.error("Product removed from cart", { position: "bottom-left" });

            state.cartItems = filteredItems
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));


        }
    }
})


export const { addToCart, deleteFromCart,  getCartTotal ,  removeFromCart } = cartSlice.actions

export default cartSlice.reducer;