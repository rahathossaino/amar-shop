import "./user_datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../Datatablesource";
import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Admin from "../../Admin";




const Datatable = () => {
  const navigate=useNavigate();
  const [users, setUser] = useState([]);
  const {http}=Admin();
  const userData=()=>{
    try{
      http.get('/admin/users')
      .then(res=>{
        setUser(res.data.users);
      })
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    userData();
  },[]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="id" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="usertable">
      <div className="datatableTitle">
         Users
      </div>
      <DataGrid
        className="datagrid"
        rows={users}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;