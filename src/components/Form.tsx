import React, {  useEffect, useState } from 'react'
import {  useFormik } from 'formik'
import * as Yup from 'yup'
import { useAppSelector } from 'redux/hooks'


const Form = () => {

    const [cartData,setCartData] = useState<any>()
    const cartState = useAppSelector((state) => state.cart)

    
    
    const formik = useFormik({
        initialValues: {
            firstName: '',
            surName: '',
            city: '',
            zipCode: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First Name is required'),
            surName: Yup.string().required('Sur Name is required'),
            city: Yup.string().required('City Name is required'),
            zipCode: Yup.number().required('Zip Code is required'),
        }),
        onSubmit: (value) => {
            let orders: any = []
            cartData.cartItems.map((item:any) => {
                let order = {id:item.id,quantity:item.quantity}
                orders.push(order)
            })
             fetch('http://localhost:3001/api/order',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                /* !!fix that error!! */
                body: {...value, order = [...orders]}
            })     
        }
    })
        
useEffect(() => {
setCartData(() => cartState)
},[cartState])

    if (!cartData) return <p>Loading...</p>
    return (
        <div className="shadow-xl w-1/3 mt-20 mx-auto">
            <form onSubmit={formik.handleSubmit} className='flex flex-col  text-gray-500 px-8 py-12 h-2/3 space-y-5'>
                <div className="flex flex-col">
                    <label className='text-purple-700' htmlFor='firstName'>First Name:</label>
                    <input
                        className='formInput'
                        type='text'
                        name='firstName'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    >
                    </input>
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="text-red-500">{formik.errors.firstName}</div>
                    ) : null}
                </div>
                <div className="flex flex-col">
                    <label className='text-purple-700' htmlFor='surName'>Sur Name:</label>
                    <input
                        className='formInput'
                        type='text'
                        name='surName'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.surName}
                    >
                    </input>
                    {formik.touched.surName && formik.errors.surName ? (
                        <div className="text-red-500">{formik.errors.surName}</div>
                    ) : null}                </div>
                <div className="flex flex-col">
                    <label className='text-purple-700' htmlFor='city'>City:</label>
                    <input
                        className='formInput'
                        type='text'
                        name='city'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                    >
                    </input>
                    {formik.touched.city && formik.errors.city ? (
                        <div className="text-red-500">{formik.errors.city}</div>
                    ) : null}
                </div>
                <div className="flex flex-col">
                    <label className='text-purple-700' htmlFor='zipCode'>Postal Code:</label>
                    <input
                        className='formInput'
                        type='text'
                        name='zipCode'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.zipCode}
                    >
                    </input>
                    {formik.touched.zipCode && formik.errors.zipCode ? (
                        <div className="text-red-500">{formik.errors.zipCode}</div>
                    ) : null}
                </div>

                <div className="w-full shadow-lg border-2 p-3">
                    <h1 className="font-bold text-2xl text-center mb-3">Orders</h1>
                    {cartData.cartItems.map((item) => {
                        return <div className="flex px-1 py-3 flex-row" key={item.id}>
                            <div className="flex flex-row">
                                <img
                                    className='w-12 h-12 object-contain rounded-md'
                                    src={item.cover_url}
                                    alt='bookImg' />
                                <h3 className='text-sm font-bold'>{item.title}</h3>
                            </div>
                            <div className='flex ml-auto font-bold text-blue-500 items-center'>
                                <span>x{item.quantity}</span>
                            </div>
                        </div>
                    })}
                    <div className="flex flex-row justify-end space-x-3 items-center">
                        <span className='text-2xl font-bold'>
                            Total:
                        </span>
                        <span
                            className="flex justify-end text-2xl text-green-500">
                            {cartData.totalPrice} PLN
                        </span>
                    </div>
                </div>
                <button
                    type='submit'
                    className='px-8 py-3 bg-green-600 text-white rounded-md'>
                    I ORDER AND PAY
                </button>
            </form >

        </div >
    )
}

export default Form