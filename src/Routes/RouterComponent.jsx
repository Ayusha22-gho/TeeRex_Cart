/* eslint-disable react/prop-types */

import {
    Route,
    Routes,

} from "react-router-dom";

import Products from "../components/Products"
import Checkout from "../components/Checkout";
const RouterComponent = ({productDetails, 
    cartItems,
    handleAddProduct,
    handleRemoveProduct,
    handleDeleteCart,
    handleSearchChange,
     search,
     handleFilterChange,
     filters,
     filterProduct,
    
    }) => {
    return (

        <Routes>
            <Route exact path="/"
                element={<Products productDetails = {productDetails} 
                cartItems = {cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct = {handleRemoveProduct}
                handleSearchChange = {handleSearchChange}
                search = {search}
                handleFilterChange = {handleFilterChange}
                filters = {filters}
                filterProduct = {filterProduct}
               
                />} />
            <Route path="/checkout"
                element={<Checkout cartItems = {cartItems} handleAddProduct={handleAddProduct}
                handleDeleteCart = {handleDeleteCart}
                />} />

        </Routes>

    )


}

export default RouterComponent