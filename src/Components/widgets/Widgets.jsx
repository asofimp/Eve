import "./widgets.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import LocalGroceryStoreSharpIcon from '@mui/icons-material/LocalGroceryStoreSharp';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import { Link } from "react-router-dom";

const Widget = ({type}) =>{

    let data;

    //segun la suma de los usuarios sacar el porcentaje de estos que compraron en el mes
    const pedidosporcentaje =20;
    //segun el procentaje de pedidos no enviados
    const enviosp = 100; 

    switch(type){
        case "usuario":
            data={
                title:"USUARIOS",
                total: false,
                link: "Ver todos",
                to:"/admin/users",
                icon:(
                    <GroupsSharpIcon className="icon-widget"/>
                )
            }
        break;

        case "pedido":
            data={
                title:"PEDIDOS",
                total: false,
                link: "Ver todos",
                to:"/admin/orders",
                icon:(
                    <LocalGroceryStoreSharpIcon className="icon-widget"/>
                )
            }
        break;
        
        case "envio":
            data={
                title:"ENVIO",
                total: false,
                link: "Ver todos",
                to:"/admin/delivery",
                icon:(
                    <LocalShippingRoundedIcon className="icon-widget"/>
                )
            }
        break;
        
        
        default:
        
        break;
    }

    return(
        <Link to={data.to} className="widget-link">
            <div className="widget">
                <div className="left">
                        <span className="tittle-widget">
                            {data.title}
                        </span>
                    <span className="counter-widget">{data.total} {enviosp}</span>
                    <span className="link-widget">{data.link}</span>
                </div>
                <div className="right">
                    <div className="percentage positive">
                    <KeyboardArrowUpIcon/>    
                    {pedidosporcentaje}%
                    </div>
                    {data.icon}
                </div>
            </div>
        </Link>
    )
}

export default Widget