import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';

function Cart() {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <div className="wrapper h-auto w-full bg-[#e5e5e5] flex flex-col gap-10 md:flex-row md:flex-wrap px-10">
    {cartProducts.length > 0 ? (
      cartProducts.map((product) => (
        <div key={product.id} className="bg-white shadow-md shadow-black hover:scale-105 hover:shadow-xl duration-500 w-72 rounded-xl mx-auto mt-10" onClick={() => Navigate(`/productview?productId=${product.id}`)}>
          
            <div className='w-full flex items-center justify-center '>
            <img src={product.image} alt="Product image" className="h-60 w-60 object-scale-down rounded-t-xl" />
            </div>
          
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">{product.category}</span>
            <p className="text-lg font-bold text-black truncate block capitalize">{product.title}</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">${product.price}</p>
              <div className="ml-auto" onClick={(e) => handleAddToCart(e,product)}>
                  <button className=" hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-3 py-3 bg-[#fff] text-[#696969] shadow-md shadow-black rounded-full font-light transition duration-200 ease-linear">
                    <IoCartOutline className='text-black font-black hover:text-cyan-500 ' />
                  </button>
              </div>
            </div>
           
          </div>
        </div>
      ))
    ) : (
      <div className="w-screen  h-screen flex justify-center items-center">
        <h3>No products in your cart</h3>
            </div>
    )}
  </div>
  )
}

export default Cart