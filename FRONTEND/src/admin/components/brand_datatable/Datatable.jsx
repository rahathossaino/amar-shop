import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Admin from "../../Admin";
import toast from 'react-hot-toast';


const Datatable = () => {
  const navigate=useNavigate();
  const [brands, setBrand] = useState([]);
  const{http}=Admin();
  const handleDelete = (id) => {
    const loading=toast.loading('Brand deleting...');
    const url='/admin/brands/delete/'+id;
    try{
      
      http.post(url)
      .then(res=>{
        setBrand(brands.filter((item) => item.id !== id));
        toast.dismiss(loading);
        toast.success('Brand deleted successfully');
      })
      .catch(error=>{
        toast.dismiss(loading);
        navigate('/admin/brands')
        toast.error("Brand Doesn't exist");
      })
    }catch(error){
      toast.error('Something went wrong')
    }
  };
  const userData=()=>{
    try{
      http.get('/admin/brands')
      .then(res=>{
        setBrand(res.data.brands);
      })
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    userData();
  },[]);


  const barndColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.name}
          </div>
        );
      },
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
      width: 250,
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
    <div className="brandTable">
      <div className="datatableTitle">
        Create New Brand
        <Link to="/admin/brands/create" className="link">
          Create New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={brands}
        columns={barndColumns}
        pageSize={5}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;