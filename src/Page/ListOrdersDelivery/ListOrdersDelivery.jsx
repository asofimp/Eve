import './listOrdersDelivery.css'
import Sidebar from "../../Components/sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
import Tabla from "../../Components/tabla/Tabla"
import { tablaSources } from '../../tablaSource'

const ListOrdersDelivery =({type, title}) =>{

    const { columns, rows } = tablaSources[type] || {};

    return(
        <div className="listOrdersDelivery">
            <Sidebar/>
            <div className="container-listOrdersDelivery">
                <Navbar/>
                <Tabla
                    title={title}
                    columns={columns}
                    rows={rows}
                />
            </div>
        </div>
    )
}

export default ListOrdersDelivery