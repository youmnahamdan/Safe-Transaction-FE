import React from 'react';
import './navbar.css'
const NavBar = () => {


    return (
        <>

            <nav className="nav">
                <ul className="list">
                    <li className="listItem"><a className="link" href="#">Home</a></li>
                    <li className="listItem"><a className="link" href="#">About</a></li>
                    <li className="listItem"><a className="link" href="#">Services</a></li>
                    <li className="listItem"><a className="link" href="#">Contact</a></li>
                </ul>
            </nav>
            <img className='img' src="./logo.png" alt="" />
        </>
    );

}
export default NavBar;