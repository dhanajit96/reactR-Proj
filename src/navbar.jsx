
import logo from './disney.svg'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div class="navbar">
            <div class="logo">
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/favourites">Favourites</Link>
                <Link to="/addfavourites">Add Favourites</Link>
                <Link to="/users">Users</Link>
               
            </div>
        </div>

    )
}
export default Navbar;