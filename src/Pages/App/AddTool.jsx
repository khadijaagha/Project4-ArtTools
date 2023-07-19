import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AddTool () {
    const navigate = useNavigate();
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [error, setError] = useState('')
 
    const handleSubmit = async (e) => {
        e.preventDefault()
        let artproduct = {
            title:title,
            price:price,
            description:description,
            image:image
        }
        console.log(artproduct);
        const product = {title, description, price, image}
        const token = localStorage.getItem('token');
        const response = await fetch('/api/arttools', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        })
        console.log(response);
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setTitle('')
            setPrice('')
            setDescription('')
            setImage('')
            setError('')
            console.log("New Product Added 🎨")
            navigate('/alltools');
        }
    }
    return(
        <div>
         <h1>Add a Tool</h1>   
        <form className="create-tool" onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)}
            value={title} />
            <label>Description</label>
            <input type="text" onChange={(e) => setDescription(e.target.value)}
            value={description} />
            <label>Price</label>
            <input type="text" onChange={(e) => setPrice(e.target.value)}
            value={price}/>
            <label>Upload Image</label>
            <input type="text" onChange={(e) => setImage(e.target.value)}
            value={image}/>
            <button type="submit" onClick={handleSubmit}>Add Tool</button>
            {error && <div className="error">{error}</div>}
        </form>
        </div>
    )
}