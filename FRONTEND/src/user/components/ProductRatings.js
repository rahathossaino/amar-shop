import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS
import styled from 'styled-components';

const ProductRatings = ({ productRatings,numberOfProductRating }) => {
    return (
        <Wrapper>
          <h3>({numberOfProductRating} reviews)</h3>
            {productRatings && productRatings.map((productRating, index) => (
                <div key={index} className="rating-group">
                    <span className='username'><strong>{productRating.username}</strong></span>
                    <div className="star-rating " title={`${(productRating.rating * 100) / 5}%`}>
                        <div className="back-stars">
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className={i < Math.floor(productRating.rating) ? "fas fa-star yellow-star" : (productRating.rating % 1 !== 0 && i === Math.floor(productRating.rating)) ? "fas fa-star-half-alt yellow-star" : "far fa-star yellow-star"} aria-hidden="true"></i>
                            ))}
                        </div>
                    </div>
                    <div className="comment">
                        <p>{productRating.comment}</p>
                    </div>
                </div>
            ))}
        </Wrapper>
    );
};
const Wrapper=styled.section`
  margin:2rem 0;
  display:flex;
  flex-direction:column;
  gap:3rem;
  .rating-group{
    display:flex;
    flex-direction:column;
    gap:0.7rem;
    .username{
      font-size:1.5rem;
    }
    .comment{
      width:65%;
      border:0.5px solid gray;
      height:7rem;
      margin-left:1rem;
      padding-left:0.5rem;
    }
  }
  
  .yellow-star{
    color:#ffc107;
    font-size:1.4rem;
  }
`
export default ProductRatings;
