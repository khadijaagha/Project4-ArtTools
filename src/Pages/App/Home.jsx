import { Link } from "react-router-dom";
import * as productsAPI from '../../utilities/products-api';
import { useState, useEffect } from "react";
import Footer from "../../Components/Footer"; 

export default function Home() {

    const [artProducts, setProducts] = useState([])
    useEffect(function () {
        async function getProducts() {
            const products = await productsAPI.getAll();
            setProducts(products);
        }
        getProducts();
    }, []);

    return (
        <div>
            <div className="home-one">
                <div className="brush">

                </div>
                <h1>ART TOOLS</h1>
                <h3>20% OFF ALL OUR <br />COLLECTIONS</h3>
                <Link to="/alltools"><button>SHOP NOW</button></Link>



            </div>
            <ul>

                {artProducts.map((product, idx) => (
                    <>

                        <li key={idx}>
                            <Link to={`/${product._id}`}>
                                <p><img src={product.image} alt="" /></p>
                                <p>{product.title}</p>
                                <p>£{product.price}</p>
       
                            </Link>
                        </li>
                       
                    </>
                ))}
            </ul>
            <div className="signup">
                <h3>SIGN UP NOW & GET 10% OFF!</h3>
                <button className="signup-btn">SIGN UP</button>
                <span className="paintbrush">
                    <img src="https://i.imgur.com/RjxZlNO.png" alt="" />
                    </span>
            </div>
                    <Footer />
        </div>

);
}
