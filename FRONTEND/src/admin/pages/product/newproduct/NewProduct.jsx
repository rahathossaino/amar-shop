import "./newproduct.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import ProductForm from "./ProductForm"

const NewProduct = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <ProductForm/>
      </div>
    </div>
  )
}

export default NewProduct;