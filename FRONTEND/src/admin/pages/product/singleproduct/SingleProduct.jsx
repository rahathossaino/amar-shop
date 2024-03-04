import "./singleproduct.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"

const data={
  id: 1,
  title: "Snow",
  slug:'snow',
  images: ["https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
  status: "active",
  category:"cloth",
  subcategory:'pant',
  short_description:'jdfjfo asfasfas  ffr qwr    ds vds g gewqf',
  description:'dssgsgsg mtewtw wqd'
}


const SingleProduct = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="singleproduct">
          <div className="left">
            <div className="item">
              <span className="title">ID:</span>
              <span>{data.id}</span>
            </div>
            <div className="item">
              <span className="title">Title:</span>
              <span>{data.title}</span>
            </div>
            <div className="item">
              <span className="title">Slug:</span>
              <span>{data.slug}</span>
            </div>
            <div className="item">
              <span className="title">Short Description:</span>
              <span>{data.short_description}</span>
            </div>
            <div className="item">
              <span className="title">Description:</span>
              <span>{data.description}</span>
            </div>
            <div className="item">
              <span className="title">Price:</span>
              <span>{data.price}</span>
            </div>
            <div className="item">
              <span className="title">Quantity:</span>
              <span>{data.qty}</span>
            </div>
            <div className="item">
              <span className="title">SKU:</span>
              <span>{data.sku}</span>
            </div>
            <div className="item">
              <span className="title">Category:</span>
              <span>{data.category}</span>
            </div>
            <div className="item">
              <span className="title">Subcategory:</span>
              <span>{data.subcategory}</span>
            </div>
            <div className="item">
              <span className="title">Brand:</span>
              <span>{data.brand}</span>
            </div>
            <div className="item">
              <span className="title">Price of The Day:</span>
              <span>{data.price_of_day}</span>
            </div>
            <div className="item">
              <span className="title">Status:</span>
              <span>{data.status}</span>
            </div>
            <div className="item">
              <span className="title">Featured:</span>
              <span>{data.is_featured}</span>
            </div>
          </div>

          <div className="right">
            {
              data.images.map((element,idx)=>{
                return <img src={element} alt={idx} className="image"/>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct;