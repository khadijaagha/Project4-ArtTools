import { useEffect, useState } from "react"
import * as productsAPI from '../../utilities/products-api';
import { Link } from "react-router-dom";


export default function AllTools() {
    const [artProducts, setProducts] = useState([])
    useEffect(function () {
        async function getProducts() {
            const products = await productsAPI.getAll();
            setProducts(products);
        }
        getProducts();
    }, []);

    console.log(artProducts);
    return (
        <div>
            <div className="tools-title">
                <h1>ALL TOOLS</h1>
                <ul>

                {artProducts.map((product, idx) => (
                    <>
                    {/* <div className="product-details"> */}

                        <li key={idx}>
                          <Link to={`/${product._id}`}>
                        <p className="alltools-img"><img src={product.image} width="20%" height="auto" alt="" /></p>
                        <p>{product.title}</p>
                        <p>£{product.price}</p>
                       
                            </Link>  
                        </li>
                    {/* </div> */}
                        <div className="buttons">
                            <div className="addtocart"><button onClick={() => console.log("Add to cart clicked👍")}>🛒</button></div>
                            <div className="wishlist"><button onClick={() => console.log("Heart btn clicked❤️")}>♡</button></div>
                        </div>
                    </>
                ))}
                </ul>
            </div>

        </div>
    );
}