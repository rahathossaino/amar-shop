import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios'; // Import Axios if not already imported
import StarRating from './StarRating';
import ProductRatings from './ProductRatings';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';




const API='';
const Reviews = ({ productRatings, overallProductRating, numberOfProductRating }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: null, 
    review: ''
  });
  const {slug}=useParams();
  const handleSubmit = async (event) => {
    const load=toast.loading('Wait.....');
    event.preventDefault();
    try {
      const response = await Axios.post('http://127.0.0.1:8000/api/singleproduct/ratings/store/'+slug, formData);
      toast.dismiss(load);
      toast.success(response.data.message);
    } catch (error) {
      
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  return (
    <Wrapper>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h3>Write a Review</h3>
          <div className="form-data">
            <label className="title">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="form-input" />
          </div>
          <div className="form-data">
            <label className="title">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="form-input" />
          </div>
          <div className="form-data">
            <label className="title">Rating</label>
            <StarRating value={formData.rating} onChange={(rating) => setFormData({...formData, rating})} />
          </div>
          <div className="form-data">
            <textarea placeholder="How was your overall experience?" name="review" value={formData.review} onChange={handleChange} className="form-input review"></textarea>
          </div>
          <button type="submit" className="btn">Send</button>
        </form>
      </div>
      <div className="productratings">
        <ProductRatings
         productRatings={productRatings}
         overallProductRating={overallProductRating}
         numberOfProductRating={numberOfProductRating}
          />
      </div>
    </Wrapper>
  );
};


const Wrapper=styled.section`
  padding:1.5rem 2rem;
  form{
    display:flex;
    flex-direction:column;
    gap:2rem;
    .form-data{
      display:flex;
      flex-direction:column;
      gap:1rem;
      .title{
        font-size:1.6rem;
      }
      .form-input{
        &.review{
          width:65%;
          max-width:100rem;
          height:15rem;
        }
      }
    }
    .btn{
      width:8rem;
      height:4.3rem;
      background-color:rgb(98 84 243);
      transition:0.3s all;
      cursor:pointer;
      color:white;
      &:hover{
        transform:scale(0.95)
      }
    }
  }
  .productratings{
    margin-top:4rem;
  }
`;

export default Reviews;
