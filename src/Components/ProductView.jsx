import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';


const ProductView = () => {

    const [product,setProduct] = useState({})
    const location = useLocation()

    useEffect(() => {
        const search = new URLSearchParams(location.search)
        const id = search.get('productId')  

        async function fetchProduct () {

            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
                setProduct(response.data)

            }catch(err) {
                console.log('Cannot find the product', err);
            }
        }

        fetchProduct()
    },[])

    return (
        <>

            {product? (
            <div className='w-full h-screen flex overflow-hidden'>
                <div className='w-[50%] h-full flex items-center justify-center '>
                    <div className="flex justify-center items-center img-box h-3/4 max-lg:mx-auto ">
                        <img src={product.image} alt="Yellow Tropical Printed Shirt image"
                            className="w-auto h-auto max-w-[500px] max-h-[500px] m-auto" />
                    </div>
                </div>
                <div className='w-[50%] h-full flex flex-col justify-center'>
                    <div className="data w-full max-w-xl">
                        <p className="text-lg font-medium leading-8 text-indigo-600 mb-4">{product.category}
                        </p>
                        <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">{product.title}</h2>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                            <h6
                                className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                                ${product.price}</h6>
                           

                        </div>
                        <p className="text-gray-500 text-base font-normal mb-5">
                        {product.description}
                        </p>

                        <div className="flex items-center gap-3">
                            <button
                                className="text-center w-full px-5 py-4 rounded-[100px] bg-black flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                                <svg className="stroke-white mr-2" width="22" height="22" viewBox="0 0 22 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                                        stroke="" stroke-width="1.6" stroke-linecap="round" />
                                </svg>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
             ) : (
                <div className="w-screen  h-screen flex justify-center items-center">
                <BeatLoader />
                </div>
            )}
        </>
)}

export default ProductView