import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
   
    return (
        <div>
            <header>
                <nav className={toggle ? "show" : "hide" }>
                    <button onClick={() => setToggle(!toggle)} className="my-button" id="my-button">
                        <div className="fas fa-bars"></div>
                    </button>
                    <ul id='mynav'>
                        <li>
                            <Link className="link" to='/'>
                                home
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link className="link" to='/saved'>
                                saved records
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar