import React, {useState} from 'react'
import logo from '../../assets/logo.svg'
import { AiOutlineMenu, AiFillCloseSquare } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    return(
        <header>
            <div className='Header-Container'>
                <img src={logo} alt='Logo'/>
                <div
                onClick={()=> setMenuActive(!menuActive)}
                >
                    {menuActive 
                    ?<AiFillCloseSquare/>
                    :<AiOutlineMenu/>               
                }
                </div>
                <nav>
                    <Link to='/'>Portfolio</Link>
                    <Link to='AboutUs'>About Us</Link>
                    <Link to='Contact'>Contact</Link>
                </nav>
            </div>
            <div className={menuActive ? 'Header-menu_movil Active' : 'Header-menu_movil'}>
                <Link to='/'>Portfolio</Link>
                <Link to='AboutUs'>About Us</Link>
                <Link to='Contact'>Contact</Link>
            </div>
        </header>
    )
}

export default Header