import { useEffect, useState } from 'react';
import * as productsAPI from '../../utilities/products-api';
import { useParams } from 'react-router-dom';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ToolDetails({ user, setUser }) {
  const navigate = useNavigate();
  const [artProducts, setProduct] = useState(null)
  const [reviews, setReviews] = useState([]); //!REVIEWS STATE VARIABLES
  const [reviewContent, setReviewContent] = useState('');
  const [rating, setRating] = useState(0);
  const [error, setError] = useState('');
  const { id } = useParams();
  // console.log(useParams());

  async function getProduct() {
    const product = await productsAPI.getById(id);
    setProduct(product);
    setReviews(product.review);
  }


  console.log("REVIEW CONTENT -->", reviewContent);
  useEffect(function () {
    getProduct();
  }, [id]);

  console.log("REVIEW -->", reviews);

  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`/api/arttools/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(artProducts),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    // console.log(response);

    try {
      const json = await response.json();
      // console.log(json);
      navigate('/alltools');

      if (!response.ok) {
        setError(json.error);

      }
    } catch (error) {
      console.error(error);
      setError('Error parsing JSON response');
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    let productReview = {
      review: reviewContent,
      rating: rating
    }

    console.log(productReview);
    const oneReview = { content: reviewContent, rating: rating };
    const token = localStorage.getItem('token');
    const response = await fetch(`/api/arttools/${id}/reviews/new`, {
      method: 'POST',
      body: JSON.stringify(oneReview),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    // console.log(response);
    const json = await response.json()
    console.log(json)
    if (!response.ok) {
      setError(json.error)
    }

    if (response.ok) {
      setReviewContent('')
      setRating('')
      setError('')
      getProduct();
      console.log("REVIEW ADDED")
      navigate(`/${id}`);
    }
  }

  // console.log("USER ID --->", user._id)


  return (
    <>
      <div>

        <h1 className='tool-details-title'>TOOL DETAILS</h1>
        <ul>


          <li>
            <p className='tooldetails-img'><img src={artProducts?.image} alt="" /></p>
            <h4 className='title-tool'>{artProducts?.title}</h4>
            <p>£{artProducts?.price}</p>
            <p>{artProducts?.description}</p>
          </li>

        </ul>
        <div className="buttons">
          {user._id === "64b2b8bd86936c644794c110" && (
            <>
              <button onClick={handleDelete}>
                <Link to="/alltools">Delete</Link>
              </button>
              <Link to={`/updatetool/${artProducts?._id}`}>Update Product</Link>
            </>
          )}
        </div>

        <h2>Reviews</h2>


        <ul >
          {reviews && reviews.map((review, idx) => (
            <div className='reviews'>
              <li key={idx}>
                <p>{review.content}</p>
                <p>{review.rating} <span className="five">out of 5</span></p>
                <p className='username'>{review.user.name}</p>
                {/* {console.log('REVIEW USER ==>', review.user.name)} */}
                <hr className='solid' />
              </li>
            </div>

          ))}

        </ul >

        <h4>Tried this Product?
          <br />
          Add a Review!</h4>
        <form action="post" className='add-review'>
          Review:
          <span className="input-text" onChange={(e) => setReviewContent(e.target.value)}> <input type="text" /> </span>
          <br />
          Rating:
          <select className='select' onChange={(e) => setRating(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button className='post-btn' onClick={handleSubmit}>Post</button>
        </form>
      </div >
    </>
  )
}

