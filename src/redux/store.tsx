import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";
import { bookApi } from './bookApi';




const store = configureStore({
    reducer: {
        cart: cartReducer,
        [bookApi.reducerPath]: bookApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bookApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;