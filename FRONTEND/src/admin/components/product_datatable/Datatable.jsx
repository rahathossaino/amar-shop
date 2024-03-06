import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";


const userRows =[{
    id: 1,
    title: "Snow",
    slug:'snow',
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "inactive",
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
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "title",
      headerName: "Title",
      width: 180,
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
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "qty",
      headerName: "Quantity",
      width: 120,
    },
    {
      field:"sub-categoty",
      headerName: "Sub-Category",
      width: 130,
    },
    {
      field:"brand",
      headerName: "Brand",
      width: 130,
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
      field: "is_featured",
      headerName: "Featured",
      width: 90,
      renderCell: (params) => {
        return (
          <div className={`cellWithfeatured ${params.row.is_featured}`}>
            {params.row.is_featured}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        const url="/admin/products/view/"+params.row.id;
        const url2="/admin/products/edit/"+params.row.id;
        return (
          <div className="cellAction">
            <div
              className="viewButton"
            >
              <Link to={url} className="link">View</Link>
            </div>
            <div className="editButton">
              <Link  to={url2} className="link">Edit</Link>
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
    <div className="productdatatable">
      <div className="datatableTitle">
        Create New Product
        <Link to="/admin/products/create" className="link">
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