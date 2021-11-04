import React from 'react'
import { Link } from 'react-router-dom'
import logoWhite from '../../assets/logoWhite.svg'
import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
    return(
        <footer>
            <section>
                <div className='Footer-container'>
                <Link to='/'>
                    <div className='Logo-Container'>
                        <img src={logoWhite} alt="Logo" />
                    </div>
                </Link>
                <nav>
                    <Link to='/'>Portfolio</Link>
                    <Link to='AboutUs'>About Us</Link>
                    <Link to='Contact'>Contact</Link>
                </nav>
                </div>
                <div className='Footer-banner'>
                    <h2>See Our Portfolio  <AiOutlineArrowRight/></h2>
                </div>
            </section>
        </footer>
    )
}

export default Footer