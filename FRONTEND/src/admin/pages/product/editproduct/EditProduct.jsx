import "./editproduct.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import EditForm from "./EditForm"



const EditProduct = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <EditForm/>
      </div>
    </div>
  )
}

export default EditProduct;