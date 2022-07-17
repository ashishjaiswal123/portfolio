import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="n-wrappper">
        <div className="n-left">
            <div className="n-name">Ashish</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                        <li>Services</li>
                    </Link>
                    <Link spy={true} to='Exprience' smooth={true} activeClass='activeClass'>
                        <li>Exprience</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
                        <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true} activeClass='activeClass'>
                        <li>Testimonials</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
            <button className="button n-button">
                Contact
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar