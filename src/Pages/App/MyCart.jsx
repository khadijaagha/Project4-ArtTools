import { useEffect, useState } from "react"
import * as productsAPI from '../../utilities/products-api';
import { Link } from "react-router-dom";

export default function MyCart () {

    const [artProducts, setProducts] = useState([])
    useEffect(function () {
        async function getProducts() {
            const products = await productsAPI.getAll();
            setProducts(products);
        }
        getProducts();
    }, []);

    return(
        <div>
            <div className="cart-title">
            <h1>MY CART</h1>
            </div>
        <h5>There are no items in your cart at the moment</h5>
        <Link to="/alltools"><button>SHOP NOW</button></Link>
        </div>
    )
}