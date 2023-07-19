import { Link } from "react-router-dom"
export default function Wishlist() {
    return(
        <div>
            <div className="wishlist-title">
                <h1>WISHLIST</h1>
            </div>
                <h5>There are no items in your wishlist at the moment</h5>
                <Link to="/alltools"><button>SHOP NOW</button></Link>
        </div>
    )
}