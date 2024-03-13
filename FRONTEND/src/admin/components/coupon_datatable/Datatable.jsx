import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Admin from "../../Admin";
import toast from 'react-hot-toast';

const Datatable = () => {

  const navigate=useNavigate();
  const [coupons, setCoupon] = useState([]);
  const {http}=Admin();
  const handleDelete = (id) => {
    const loading=toast.loading('Coupon deleting...');
    const url='/admin/coupons/delete/'+id;
    try{
      http.post(url)
      .then(res=>{
        setCoupon(coupons.filter((item) => item.id !== id));
        toast.dismiss(loading);
        toast.success('Coupon deleted successfully');
      })
      .catch(error=>{
        toast.dismiss(loading);
        navigate('/admin/coupons')
        toast.error("Coupon Doesn't exist");
      })
    }catch(error){
      toast.error('Something went wrong')
    }
  };
  const userData=()=>{
    try{
      http.get('/admin/coupons')
      .then(res=>{
        setCoupon(res.data.coupons);
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
      field: "code",
      headerName: "Code",
      width: 200,
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
        const url='/admin/coupons/'+params.row.id;
        return (
          <div className="cellAction">
            <div
              className="viewButton"
            >
              <Link to={url} className="link">
                View
              </Link>
            </div>
            <div
              className="editButton"
              // onClick={() => handleEdit(params.row.id)}
            >
              Edit
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    }
  ];
  

  return (
    <div className="coupontable">
      <div className="datatableTitle">
        Create New Coupon
        <Link to="/admin/coupons/create" className="link">
          Create New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={coupons}
        columns={categoryColumns}
        pageSize={5}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;