import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <Link to="/" className="nav-link">
                    <img src={logo} alt="logo" />
                    <p>SHOPPER</p>
                </Link>
            </div>

            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}>
                    <Link to='/' className="nav-link">Shop</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("mens") }}>
                    <Link to='/mens' className="nav-link">Mens</Link>
                    {menu === "mens" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("womens") }}>
                    <Link to='/womens' className="nav-link">Womens</Link>
                    {menu === "womens" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("kids") }}>
                    <Link to='/kids' className="nav-link">Kids</Link>
                    {menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>

            <div className="nav-login-cart">
                <Link to="/login" className="nav-link">
                    <button>Login</button>
                </Link>
                <Link to="/cart" className="nav-link">
                    <img src={cart_icon} alt="cart" />
                </Link>
            </div>
        </div>
    )
}

export default Navbar
