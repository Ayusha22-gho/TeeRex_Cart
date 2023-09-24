import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'

import "./Header.css"
import { AddShoppingCartOutlined } from "@mui/icons-material";

const handleCartNo = (items) => {
    let sum = 0;
    items.map((item) => (
        sum = sum + item.qty
    ))
    return sum;
}

const Header = ({ cartItems }) => {



    return (
        <div className="navbar">
            <div className="name">
                <h4>TeeRex Store</h4>
            </div>
            <div className="logo">
                <Link to="/">Products</Link>

                <Link to="/checkout">
                    <div className="cartIcon">
                        <AddShoppingCartOutlined />
                        <span>
                            {cartItems.length === 0 ? 0 : handleCartNo(cartItems)}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;