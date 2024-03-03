import "./productlist.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
// import Datatable from "../../../components/product_datatable/Datatable"

const BrandList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* <Datatable/> */}
      </div>
    </div>
  )
}

export default BrandList;