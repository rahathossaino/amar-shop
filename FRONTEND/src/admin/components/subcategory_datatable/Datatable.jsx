import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Admin from "../../Admin";
import toast from 'react-hot-toast';



const Datatable = () => {
  const [subcategories, setSubcategory] = useState([]);
  const {http}=Admin();
  const handleDelete = (id) => {
    const loading=toast.loading('Subcategory deleting...');
    const url='/admin/subcategories/delete/'+id;
    try{   
      http.post(url)
      .then(res=>{
        setSubcategory(subcategories.filter((item) => item.id !== id));
        toast.dismiss(loading);
        toast.success('Subcategory deleted successfully');
      })
      .catch(error=>{
        toast.dismiss(loading);
        toast.error("Subcategory Doesn't exist");
      })
    }catch(error){
      toast.dismiss(loading);
      toast.error('Something went wrong')
    }
  };
  const userData=()=>{
    try{
      http.get('/admin/subcategories')
      .then(res=>{
        setSubcategory(res.data.subcategories);
      })
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    userData();
  },[]);


  const categoryColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      width: 230,
    },
    {
      field: "slug",
      headerName: "Slug",
      width: 230,
    },
    {
        field: "category_name",
        headerName: "Category",
        width: 230,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            <div
              className="editButton"
              // onClick={() => handleEdit(params.row.id)}
            >
              Edit
            </div>
          </div>
        );
      },
    }
  ];
  

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Create New Sub-Category
        <Link to="/admin/sub-categories/create" className="link">
          Create New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={subcategories}
        columns={categoryColumns}
        pageSize={6}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;