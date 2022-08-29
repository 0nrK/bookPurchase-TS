import React from 'react'
import { addToCart, removeFromCart, deleteFromCart } from '../redux/cartSlice'
import { useAppDispatch } from 'redux/hooks';

const CartItem = ({ props } : any) => {
    const dispatch = useAppDispatch()

    return (
        <section className='flex py-5 w-full border-t-2  border-purple-700  flex-col lg:flex-row justify-between  space-x-3'>
            <div className='flex w-full space-x-3 flex-row'>
                <div>
                    <img
                        className='w-24 h-24 rounded-md object-contain'
                        src={props.cover_url}
                        alt='BookImage' />
                </div>
                <div className='space-y-3'>
                    <h2 className='font-bold text-xl'>{props.title}</h2>
                    <div className='text-md lg:text-xs text-gray-500 flex flex-row space-x-5'>
                        <h4>{props.author}</h4>
                        <span>Pages:{props.pages}</span>
                       
                    </div>
                    <div className="flex flex-row ">
                        <button
                            data-action="decrement"
                            onClick={() => dispatch(removeFromCart(props))}
                            className=" bg-gray-300 text-purple-700   hover:text-purple-800 
                         hover:bg-gray-400 h-full w-8 rounded-l cursor-pointer outline-none">
                            <span className="m-auto text-2xl font-thin">−</span>
                        </button>

                        <input
                            type="number"
                            className=" focus:outline-none text-center w-8 bg-gray-300 
                            font-semibold text-md hover:text-purple-800 focus:text-purple-800
                        md:text-basecursor-default flex items-center text-purple-700  
                        outline-none"
                            readOnly
                            name="custom-input-number"
                            value={props.quantity}>

                        </input>

                        <button
                            data-action="increment"
                            onClick={() => dispatch(addToCart(props))}
                            className="bg-gray-300 outline-none focus:outline-none text-purple-700   hover:text-gray-700
                         hover:bg-gray-400 h-full w-8 rounded-r cursor-pointer">
                            <span className="m-auto text-2xl font-thin">+</span>
                        </button>

                        <div className="items-center space-x-1 text-green-600 flex ml-4">
                            <span>
                                {props.price}
                            </span>
                            <span>
                                {props.currency}
                            </span>
                        <button
                        className="text-black ml-3"
                            onClick={() => dispatch(deleteFromCart(props))}>
                                Delete
                        </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CartItem