import "./newsubcategory.scss"
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import SubCategoryForm from "./SubCategoryForm";

const NewSubCategory = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <SubCategoryForm/>
      </div>
    </div>
  )
}

export default NewSubCategory;