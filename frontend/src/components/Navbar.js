import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header>
            <div>
                <Link to='/'>
                    home
                </Link>
                <Link to='/saved'>
                    saved records
                </Link>
            </div>
        </header>
    </div>
  )
}

export default Navbar