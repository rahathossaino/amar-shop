import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Admin from "../../Admin";
import toast from 'react-hot-toast';


const Datatable = () => {
  const[categories,setCategory]=useState([]);
  const navigate=useNavigate();
  const {http}=Admin();
  const handleDelete = (id) => {
    const loading=toast.loading('category deleting...');
    const url='/admin/categories/delete/'+id;
    try{
      
      http.post(url)
      .then(res=>{
        setCategory(categories.filter((item) => item.id !== id));
        toast.dismiss(loading);
        toast.success('category deleted successfully');
      }).catch(error=>{
        toast.dismiss(loading);
        navigate('/admin/categories')
        toast.error("Category Doesn't exist");
      })
    }catch(error){
      toast.error('Something went wrong')
    }
  };
  const userData=()=>{
    try{
      http.get('/admin/categories')
      .then(res=>{
        setCategory(res.data.categories);
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
      width: 250,
    },
    {
      field: "slug",
      headerName: "Slug",
      width: 250,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
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
    <div className="categorytable">
      <div className="datatableTitle">
        Create New Category
        <Link to="/admin/categories/create" className="link">
          Create New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={categories}
        columns={categoryColumns}
        pageSize={5}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;