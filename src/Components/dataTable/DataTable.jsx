import "./dataTable.css"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { useEffect, useState } from "react";

const DataTable = ({rut, title, columns, rows}) =>{
    
    const [data, setData] = useState(rows);

    useEffect(() => {
        setData(rows);
    }, [rows]);
    

    const HandleDelete = (id) =>{
        setData(data.filter(item => item.id !== id ))
    }

    const actionColumn =[
        {
            field: "accion",
            headerName: "Accion",
            width: 200,
            renderCell:(params)=>{
                return(
                    <div className="cellAction">
                        <Link to={`/admin/users/${params.row.id}`}  style={{textDecoration:"none"}}>
                        <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton" onClick={() => HandleDelete(params.row.id)}>Delete</div>
                    </div>
                );
            },
        },
    ]


    return(
        <div className="data-table">
            <div className="data-table-title">
                <h1 className="title-data-table">{title}</h1>
                <Link to={rut}  className="data-table-addUser">
                    <AddBoxOutlinedIcon className="data-table-addUser" sx={{fontSize:"2.3rem"}}/>
                </Link>
            </div>
            <DataGrid className="Grid"
                rows={data}
                columns={columns.concat(actionColumn)}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )

}

export default DataTable