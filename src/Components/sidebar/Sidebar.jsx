import "./sidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";


const Sidebar = () =>{

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/admin/home" style={{textDecoration:"none"}}>
                    <img src="../../eve.png" alt="Eve" className="logo" />
                </Link>
            </div>
            <div className="center">
                <ul>
                    <p className="tittle">Dashboard</p>
                    <li className="li-sidebar">
                        <Link to="/admin/home" style={{textDecoration:"none"}}>
                            <DashboardIcon className="icon"/>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <p className="tittle">Lista</p>
                    <li className="li-sidebar">
                        <Link to="/admin/users" style={{textDecoration:"none"}}>
                            <GroupIcon className="icon"/>
                            <span>Usuarios</span>
                        </Link>
                    </li>
                    <li className="li-sidebar">
                        <Link to="/admin/products" style={{textDecoration:"none"}}>
                            <StoreIcon className="icon"/>
                            <span>Productos</span>
                        </Link>
                    </li>
                    <li className="li-sidebar">
                        <Link to="/admin/orders" style={{textDecoration:"none"}}>
                            <ShoppingCartIcon className="icon"/>
                            <span>Pedidos</span>
                        </Link>
                    </li>
                    <li className="li-sidebar">
                        <Link to="/admin/delivery" style={{textDecoration:"none"}}>
                            <LocalShippingIcon className="icon"/>
                            <span>Envios</span>
                        </Link>
                    </li>
                    <p className="tittle">Servicios</p>
                    <li className="li-sidebar">
                        <BarChartIcon className="icon"/>
                        <span>Graficas</span>
                    </li>
                    <p className="tittle">Usuario</p>
                    <li className="li-sidebar">
                        <NotificationsIcon className="icon"/> 
                        <span>Notificaciones</span>
                    </li>
                    <li className="li-sidebar">
                        <LogoutIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar