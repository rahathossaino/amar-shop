import "./newbrand.scss"
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import BrandForm from "./BrandForm";

const BrandList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <BrandForm/>
      </div>
    </div>
  )
}

export default BrandList;