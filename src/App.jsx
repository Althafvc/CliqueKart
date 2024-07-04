import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import ProductView from "./Components/ProductView"
import UserLayout from "../Layout/UserLayout"


function App() {

  return (
   <BrowserRouter>

   <Routes>
    <Route path="/" element={<UserLayout />} >
    <Route path="/" element={<Home/>}/>
    <Route path="/productview" element={<ProductView />} />
    </Route>
    

   </Routes>
   </BrowserRouter>
  )
}

export default App
