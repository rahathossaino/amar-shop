import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Admin from "../../Admin";
import toast from 'react-hot-toast';



const Datatable = () => {
  const navigate=useNavigate();
  const [products, setProduct] = useState([]);
  const {http}=Admin();
  const handleDelete = (id) => {
    const loading=toast.loading('Product deleting...');
    const url='/admin/products/delete/'+id;
    try{   
      http.post(url)
      .then(res=>{
        setProduct(products.filter((item) => item.id !== id));
        toast.dismiss(loading);
        toast.success('Product deleted successfully');
      })
      .catch(error=>{
        toast.dismiss(loading);
        navigate('/admin/products')
        toast.error("Product Doesn't exist");
      })
    }catch(error){
      toast.dismiss(loading);
      toast.error('Something went wrong')
    }
  };
  const userData=()=>{
    try{
      http.get('/admin/products')
      .then(res=>{
        setProduct(res.data.products);
      })
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    userData();
  },[]);

  const categoryColumns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "title",
      headerName: "Title",
      width: 250,
      // renderCell: (params) => {
      //   return (
      //     <div className="cellWithImg">
      //       <img className="cellImg" src={`data:image/jpeg;base64,${params.row.product_image.image}`} alt="avatar" />
      //       {params.row.name}
      //     </div>
      //   );
      // },
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
      field:"subcategory",
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
        rows={products}
        columns={categoryColumns}
        pageSize={5}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;