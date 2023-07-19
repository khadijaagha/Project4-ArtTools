import { Link } from "react-router-dom"
import { user } from "../Pages/App/App"
import * as userService from '../utilities/users-service'


export default function NavBar({ user, setUser }) {
function handleLogOut() {
    userService.logOut();
    setUser(null);
}

    return(
        <nav>
            <Link to="/alltools">ALL TOOLS</Link>
            &nbsp; | &nbsp;
            <Link to="/cart">CART</Link>
            &nbsp; | &nbsp;
            <Link to="/wishlist">WISHLIST</Link>
            &nbsp; | &nbsp;
            <span>Welcome, { user.name }</span>
            &nbsp; | &nbsp;
            <Link to="/home" onClick={handleLogOut}>Log Out</Link>
            &nbsp; | &nbsp;
            <Link to="/home">🏠</Link>
            &nbsp; | &nbsp;
            <Link to="/addtool">✚</Link>
        </nav>
    )
}

