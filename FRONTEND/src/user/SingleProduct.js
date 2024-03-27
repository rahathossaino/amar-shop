import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productcontext";
import PageNavigation from "./components/PageNavigation";
import Image from "./components/Image";
import { Container } from "../styles/Container";
import FormatPrice from "../helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";
import ProductDetails from './components/ProductDetails';
import axios from "axios";


const singleProductApi = "http://127.0.0.1:8000/api/singleproduct/";
const singleProductRating = "http://127.0.0.1:8000/api/singleproduct/rating/";



const SingleProduct = () => {
  const product = {
    description: "Product Description",
    shipping_returns: "Shipping & Returns Information"
  };
  const [productRate,setProductRate]=useState({});
  const getSingleProductRating=async(url)=>{
    try {
      const response = await axios.get(url);
      if(response.status===200){
        setProductRate(response.data)
      }
    } catch (error) {
      
    }
  }
   

  const { getSingleProduct, isSingleLoading, singleProduct } =useProductContext();
  const { slug } = useParams();
  const {
    sku,
    title,
    brand,
    price,
    price_of_day,
    short_description,
    description,
    qty,
    track_qty,
    stars,
    reviews,
    product_images,
  } = singleProduct;
  useEffect(() => {
    getSingleProduct(singleProductApi+slug);
    getSingleProductRating(singleProductRating+slug);
  },[]);
  
  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    <Wrapper>
      <PageNavigation title={title} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <Image imgs={product_images} />/
          </div>

          {/* product dAta  */}
          <div className="product-data">
            <h2>{title}</h2>
            <Star stars={productRate.overallProductRating} reviews={reviews} numberOfProductRating={productRate.numberOfProductRating}/>

            <p className="product-data-price">
              MRP:
              {price_of_day!==null ?
               <del>
                <FormatPrice price={price + 250000} />
              </del> : <FormatPrice price={price + 250000} />
              }
              
            </p>
            {
              price_of_day!==null ? 
              <p className="product-data-price product-data-real-price">
                Deal of the Day: <FormatPrice price={price_of_day} />
              </p> 
              :null
            }
            <p>{short_description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Amar Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {qty > 0 || track_qty==='no' ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                SKU : <span> {sku} </span>
              </p>
              <p>
                Brand :<span> {brand} </span>
              </p>
            </div>
            <hr/>
            {qty > 0 || track_qty==='no' ? <AddToCart product={singleProduct}/> : null}
          </div>
        </div>
        <div className="product-details">
          <ProductDetails
          product={product}
          productRatings={productRate.productRatings}
          overallProductRating={productRate.overallProductRating}
          numberOfProductRating={productRate.numberOfProductRating}
          description={description}
        />
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;