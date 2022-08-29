import React, { useEffect, useState } from 'react'
import { useAppSelector } from 'redux/hooks'
import { IBook } from 'types/book'
import CartInfo from '../components/CartInfo'
import CartItem from '../components/CartItem'
import Nav from '../components/Nav'

const Cart = () => {

    const [cartItems, setCartItems] = useState<IBook[]>([])


    const cartData = useAppSelector((state) => state.cart)



    useEffect(() => {
        setCartItems(() => cartData.cartItems)
    }, [cartData])

    return (
        <div className=''>
            <Nav />
            <section className="flex max-w-5xl  flex-col mx-auto  mt-12">
                <CartInfo props={cartItems} />
                <div className="w-full mt-4 space-y-3">
                    {cartItems.map((item) => {
                        return <CartItem key={item.id} props={item} />
                    })}
                </div>
            </section>
        </div>
    )
}

export default Cart