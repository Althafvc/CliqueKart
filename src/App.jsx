import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import ProductView from "./Components/ProductView"
import UserLayout from "../Layout/UserLayout"
import SearchedProducts from "./Pages/SearchedProducts"
import Cart from "./Pages/Cart"
import Filter from "./Pages/Filter"

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<UserLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/productview" element={<ProductView />} />
          <Route path='/searchedproducts' element={<SearchedProducts />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/filter' element={<Filter/>}/>
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
