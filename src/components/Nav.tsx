import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'

const Nav = () => {
    const items = useAppSelector((state) => state.cart.cartItems)

    return (
        <nav className="w-full  flex shadow-lg text-xl lg:text-2xl flex-row justify-between items-center  p-5 lg:h-24">
            <div className="max-w-5xl w-full mx-auto flex flex-row  justify-between items-center">
            <div>
            <Link to="/">
                <span className="text-xl lg:text-2xl">Logo</span>
            </Link>
            </div>
            {/* Cart logo */}
            <div className="mt-3"> 
            <Link to="/cart">
                    {items.length > 0 &&
                        <div className='relative'>
                            <span
                                className="bg-red-500 
                            flex flex-row justify-center items-center text-lg
                            w-6 h-6 mx-auto -top-3 left-1 text-white absolute  ml-4 rounded-full">
                                {items.length}
                            </span>
                        </div>
                    }
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.75}
                            stroke="currentColor"
                            className="w-6 h-6 lg:w-9 lg:h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
            </Link>
                </div>
            </div>

        </nav >
    )
}

export default Nav