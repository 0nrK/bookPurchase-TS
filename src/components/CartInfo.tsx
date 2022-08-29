import React from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';

const CartInfo = ({ props} : any) => {

   
    const cartData = useAppSelector((state) => state.cart)

 

    return (
        <div
            className="border-2 p-2 w-full    
    justify-between  rounded-md shadow-lg flex flex-row  items-center">
            <span className='text-lg  text-gray-500'>
                {cartData.cartItems.length} item(s)
            </span>
            <span  className='text-lg text-green-700'>
                {cartData.totalPrice} PLN
            </span>
            {props.length > 0 ?
                <button className='px-6 py-4 bg-green-600 text-white  rounded-md'>
                    <Link to='/orderForm'>
                        Next
                    </Link>
                </button>
                :
                <button disabled className='px-6 py-4 bg-gray-400 text-white  rounded-md'>
                    Next
                </button>
            }
        </div>
    )
}

export default CartInfo