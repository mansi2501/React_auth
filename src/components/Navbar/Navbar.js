import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <header className='header'>
            <Link to="/">
                <div className='logo'>My Site</div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/signin" style={{color:'white'}}>Login</Link>
                    </li>
                    <li>Logout</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
