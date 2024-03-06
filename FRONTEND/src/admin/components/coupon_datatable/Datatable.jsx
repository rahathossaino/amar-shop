import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";


const userRows =[{
    id: 1,
    name: "Snow",
    code:'snow',
    status: "active",
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
    <div className="coupontable">
      <div className="datatableTitle">
        Create New Coupon
        <Link to="/admin/coupons/create" className="link">
          Create New
        </Link>
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