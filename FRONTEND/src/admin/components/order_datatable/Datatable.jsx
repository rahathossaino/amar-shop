import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Admin from "../../Admin";
import toast from 'react-hot-toast';



const Datatable = () => {
  const navigate=useNavigate();
  const [orders, setOrder] = useState([]);
  const {http}=Admin();
  const handleDelete = (id) => {
    const loading=toast.loading('Order deleting...');
    const url='/admin/orders/delete/'+id;
    try{   
      http.post(url)
      .then(res=>{
        setOrder(orders.filter((item) => item.id !== id));
        toast.dismiss(loading);
        toast.success('Order deleted successfully');
      })
      .catch(error=>{
        toast.dismiss(loading);
        navigate('/admin/orders')
        toast.error("Order Doesn't exist");
      })
    }catch(error){
      toast.dismiss(loading);
      toast.error('Something went wrong')
    }
  };
  const userData=()=>{
    try{
      http.get('/admin/orders')
      .then(res=>{
        setOrder(res.data.orders);
      })
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    userData();
  },[]);

  const categoryColumns = [
    { field: "id", headerName: "Order ID", width: 80 },
    {
      field: "user",
      headerName: "User",
      width: 120,
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
      field: "sub_total",
      headerName: "Sub Total",
      width: 100,
    },
    {
      field: "shipping",
      headerName: "Shipping",
      width: 100,
    },
    {
      field:"coupon",
      headerName: "Coupon Code",
      width: 120,
    },
    {
      field:"discount",
      headerName: "Discount",
      width: 120,
    },
    {
      field:"grand_total",
      headerName: "Grand Total",
      width: 120,
    },
    {
      field: "payment_medthod",
      headerName: "Payment method",
      width: 100,
      renderCell: (params) => {
        return (
          <div className={`cellWithpayment ${params.row.payment_medthod}`}>
            {params.row.payment_medthod}
          </div>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
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
      width: 180,
      renderCell: (params) => {
        const url="/admin/orders/"+params.row.id;
        return (
          <div className="cellAction">
            <div
              className="viewButton"
            >
              <Link to={url} className="link">View</Link>
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
    <div className="ordertable">
      <div className="datatableTitle">
        Orders
      </div>
      <DataGrid
        className="datagrid"
        rows={orders}
        columns={categoryColumns}
        pageSize={5}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;