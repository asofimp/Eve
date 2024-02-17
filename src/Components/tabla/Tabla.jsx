import "./tabla.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const Tabla = ({columns, rows, title}) => {
  
  const handleRowClick = (rowId) => {
    // Lógica para manejar el clic en la fila, por ejemplo, abrir otra pestaña
    console.log(`Fila clicada con ID: ${rowId}`);
    
    window.location.href = `/admin/orders/${rowId}`
  };


    return (
      <div className="container-tabla">
        <h1 className="title-tabla">{title}</h1>
        <TableContainer component={Paper} className="table" id="tabla-container" sx={{margin:" 25px", background:"#EEEDED", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", borderRadius: "15px", width:"70rem"}}>
          <Table sx={{ width: "100%"}} aria-label="simple table" >
            <TableHead>
              <TableRow>
                  {columns.map((columnsTabla) =>(
                    <TableCell className="tableCell"  key={ columns.field }>
                      {columnsTabla.headerName}
                    </TableCell>    
                  ))}
                  
              </TableRow>
            </TableHead>
            <TableBody className="tabla-body">
              {rows.map((rowsTabla) => (
                <TableRow key={rowsTabla.id} className="container-tableCell" onClick={() => handleRowClick(rowsTabla.id)} >
                  <TableCell className="tableCell">{rowsTabla.id}</TableCell>
                  <TableCell className="tableCell">{rowsTabla.product}</TableCell>
                  <TableCell className="tableCell">{rowsTabla.customer}</TableCell>
                  <TableCell className="tableCell">{rowsTabla.date}</TableCell>
                  <TableCell className="tableCell">{rowsTabla.amount}</TableCell>
                  <TableCell className="tableCell">{rowsTabla.method}</TableCell>
                  <TableCell className="tableCell">
                    {title === "Envios" ?
                    <span className={`location ${rowsTabla.location}`}> {rowsTabla.location} </span> : 
                    <span className={`status ${rowsTabla.status}`}>{rowsTabla.status}</span>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
};
  
export default Tabla;
  