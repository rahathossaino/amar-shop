import "./singleproduct.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import Admin from "../../../Admin";
import { useEffect, useState } from "react";


const SingleProduct = () => {
  const [product,setProduct]=useState({});
  const{productId}=useParams();
  const {http}=Admin();
  const getSingleProduct=()=>{
    http.get('/admin/products/'+productId)
    .then(res=>{
      setProduct(res.data.product);
    })
  }
  useEffect(()=>{
    getSingleProduct(productId)
  },[])
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="singleproduct">
          <div className="left">
            <div className="item">
              <span className="title">ID:</span>
              <span>{product.id}</span>
            </div>
            <div className="item">
              <span className="title">Title:</span>
              <span>{product.title}</span>
            </div>
            <div className="item">
              <span className="title">Slug:</span>
              <span>{product.slug}</span>
            </div>
            <div className="item">
              <span className="title">Short Description:</span>
              <span>{product.short_description}</span>
            </div>
            <div className="item">
              <span className="title">Description:</span>
              <span>{product.description}</span>
            </div>
            <div className="item">
              <span className="title">Price:</span>
              <span>{product.price}</span>
            </div>
            <div className="item">
              <span className="title">Quantity:</span>
              <span>{product.qty}</span>
            </div>
            <div className="item">
              <span className="title">SKU:</span>
              <span>{product.sku}</span>
            </div>
            <div className="item">
              <span className="title">Category:</span>
              <span>{product.category}</span>
            </div>
            <div className="item">
              <span className="title">Subcategory:</span>
              <span>{product.subcategory}</span>
            </div>
            <div className="item">
              <span className="title">Brand:</span>
              <span>{product.brand}</span>
            </div>
            <div className="item">
              <span className="title">Price of The Day:</span>
              <span>{product.price_of_day}</span>
            </div>
            <div className="item">
              <span className="title">Status:</span>
              <span>{product.status}</span>
            </div>
            <div className="item">
              <span className="title">Featured:</span>
              <span>{product.is_featured}</span>
            </div>
          </div>

          <div className="right">
            {
               product.product_images && product.product_images.map((element,idx)=>{
                return <img src={`data:image/jpeg;base64,${element.image}`} alt={idx} className="image" key={idx}/>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct;