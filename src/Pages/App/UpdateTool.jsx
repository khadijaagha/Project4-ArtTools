import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import * as productsAPI from '../../utilities/products-api';
import { useEffect } from "react";


export default function UpdateTool () {
    const {id} = useParams();
    const navigate = useNavigate();
    const [artProduct, setProduct] = useState(null)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [error, setError] = useState('')
 
    useEffect(function () {
        async function getProduct() {
            const product = await productsAPI.getById(id);
            setProduct(product);
        }
        getProduct();
    }, []);

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        let artproduct = {
            title:title,
            price:price,
            description:description,
            image:image
        }
        console.log(artproduct);
        const product = artProduct
        const token = localStorage.getItem('token');
        const response = await fetch(`/api/arttools/${artProduct._id}`, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(response);
        const json = await response.json()
       

        if(!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            console.log("New Product Added 🎨")
            navigate(`/${artProduct._id}`);
        }
    }
    return(
        <div>
         <h1>Add a Tool</h1>   
        <form className="create-tool" onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" onChange={(e) => setProduct({...artProduct, title: e.target.value})}
            value={artProduct?.title} />
            <label>Description</label>
            <input type="text" onChange={(e) => setProduct({...artProduct, description: e.target.value})}
            value={artProduct?.description} />
            <label>Price</label>
            <input type="text" onChange={(e) => setProduct({...artProduct, price: e.target.value})}
            value={artProduct?.price}/>
            <label>Upload Image</label>
            <input type="text" onChange={(e) => setProduct({...artProduct, image: e.target.value})}
            value={artProduct?.image}/>
            <button type="submit" onClick={handleSubmit}>Update Tool</button>
            {error && <div className="error">{error}</div>}
        </form>
        </div>
    )
}