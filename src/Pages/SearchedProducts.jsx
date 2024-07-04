import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import axios from 'axios';

function SearchedProducts() {
  const [term, setTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const search = new URLSearchParams(location.search);
    const searchValue = search.get('searchterm');
    setTerm(searchValue);
  }, [location.search]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (err) {
        console.log('Cannot find the product', err);
      }
    }

    fetchProduct();
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  }, [term, products]);

  return (
    <div className="wrapper w-full h-screen border border-red-400">
      <div className="wrapper h-auto w-full bg-[#e5e5e5] flex flex-col gap-10 md:flex-row md:flex-wrap px-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md shadow-black hover:scale-105 hover:shadow-xl duration-500 w-72 rounded-xl mx-auto mt-10"
              onClick={() => navigate(`/productview?productId=${product.id}`)}
            >
              <div className="w-full flex items-center justify-center">
                <img
                  src={product.image}
                  alt="Product image"
                  className="h-60 w-60 object-scale-down rounded-t-xl"
                />
              </div>
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  {product.category}
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {product.title}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ${product.price}
                  </p>
                  {product.oldPrice && (
                    <div>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                        ${product.oldPrice}
                      </p>
                    </div>
                  )}
                  <div className="ml-auto">
                    <a href="#">
                      <button className="hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-3 py-3 bg-[#fff] text-[#696969] shadow-md shadow-black rounded-full font-light transition duration-200 ease-linear">
                        <IoCartOutline className="text-black font-black hover:text-cyan-500" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default SearchedProducts;