import React, { useState } from 'react';
import styled from 'styled-components';
import Reviews from './Reviews';



const ProductDetails = ({ product, productRatings, overallProductRating, numberOfProductRating,description }) => {
  const [activeTab, setActiveTab] = useState('description');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Wrapper>
      <div className="bg-light">
        <ul className="nav" id="myTab" role="tablist">
          {/* Description Tab */}
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => handleTabChange('description')}
              aria-selected={activeTab === 'description'}
            >
              Description
            </button>
          </li>
          {/* Shipping & Returns Tab */}
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'shipping' ? 'active' : ''}`}
              onClick={() => handleTabChange('shipping')}
              aria-selected={activeTab === 'shipping'}
            >
              Shipping & Returns
            </button>
          </li>
          {/* Reviews Tab */}
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => handleTabChange('reviews')}
              aria-selected={activeTab === 'reviews'}
            >
              Reviews
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className={`tab-pane ${activeTab === 'description' ? 'show' : ''}`}
            id="description"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <p>{description}</p>
          </div>
          <div
            className={`tab-pane ${activeTab === 'shipping' ? 'show' : ''}`}
            id="shipping"
            role="tabpanel"
            aria-labelledby="shipping-tab"
          >
            <p>{product.shipping_returns}</p>
          </div>
          <div
            className={`tab-pane ${activeTab === 'reviews' ? 'show' : ''}`}
            id="reviews"
            role="tabpanel"
            aria-labelledby="reviews-tab"
          >
            <Reviews 
            productRatings={productRatings}
            overallProductRating={overallProductRating}
            numberOfProductRating={numberOfProductRating}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper=styled.section`
margin-top:3rem;
.nav {
  display: flex;
  list-style: none;
  padding: 0;
}

.nav-item {
  margin-right: 10px;
}

.nav-link {
  cursor: pointer;
  padding: 10px 15px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-bottom: none;
}
button{
  border:none;
}
.nav-link.active {
  background-color: #fff;
  border-bottom: 1px solid #fff;
}

.tab-content {
  border: 1px solid #dee2e6;
  padding: 15px;
}

.tab-pane {
  display: none;
}

.tab-pane.show {
  display: block;
}
`
export default ProductDetails;
