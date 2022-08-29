import React  from 'react'
import { addToCart } from '../redux/cartSlice';
import { useAppDispatch  } from 'redux/hooks';
import { IBook } from 'types/book';


const Book = ( {props} : any)  => {
    const dispatch = useAppDispatch()

  
   const handleAddToCart = (book:IBook) => {
        dispatch(addToCart(book))
    }
    return (
        <section className='flex w-full lg:w-1/2 border-t-2 border-r-2 justify-center border-dotted  lg:justify-around border-indigo-600 p-5 flex-col lg:flex-row  space-x-5'>
            <div className='items-center flex justify-center'>
                <img
                    className='rounded-md min-h-28 lg:w-32 lg:h-32'
                    src={props.cover_url}
                    alt='BookImage' />
            </div>
            <div className='space-y-3 text-center lg:text-start w-full lg:items-start'>
                <h2 data-testid='title' className='font-bold text-lg'>{props.title}</h2>
                <div className='text-xs text-gray-500 flex flex-col '>
                    <h4 data-testid='author' className='font-bold'>{props.author}</h4>
                    <span>Pages:{props.pages}</span>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-between space-x-2 text-xl">
                
                <div className='flex flex-row'>
                    <span className='text-green-600'>
                        {props.price}
                    </span>
                    <span className='text-green-600'>
                        {props.currency}
                    </span>
                </div>
                <button
                    onClick={() => handleAddToCart(props)}
                    className="p-2 w-32  bg-purple-700 rounded-md text-white">
                    Add to card
                </button>
                </div>
            </div>
        </section>
    )
}

export default Book