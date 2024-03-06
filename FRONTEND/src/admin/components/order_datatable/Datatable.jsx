import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";


const userRows =[{
    id: 1,
    title: "Snow",
    slug:'snow',
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "pending",
  }]

const Datatable = () => {

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const handleEdit = (id) => {
    setData(data.filter((item) => item.id === id));
  };

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
              onClick={() => handleEdit(params.row.id)}
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
        rows={data}
        columns={categoryColumns}
        pageSize={5}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;