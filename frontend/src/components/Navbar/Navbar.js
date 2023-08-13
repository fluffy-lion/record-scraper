import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <header>
                <nav>
                <button class="my-button" id="my-button">
        <i class="fas fa-bars"></i>
    </button>
                    <ul>
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