import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const mobileMenu = () => {
        toggle ? setToggle(false) : setToggle(true)
    }
    const itemClicked = () => {
        toggle ? setToggle(false) : setToggle(true)
    }
    return (
        <div>
            <header>
                <nav className="navbar">
                    <a href="#" className='nav-logo'>records</a>
                    <ul className={`nav-menu ${toggle ? "active" : ""}`}>
                        <li className='nav-item'>
                            <Link onClick={itemClicked} className="nav-link" to='/'>
                                home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link onClick={itemClicked} className="nav-link" to='/saved'>
                                saved records
                            </Link>
                        </li>
                    </ul>
                    <div onClick={mobileMenu} className={`hamburger ${toggle ? "active" : ""}`}>
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar