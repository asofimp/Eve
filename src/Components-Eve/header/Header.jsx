import './header.css'
import { Link } from "react-router-dom";

const Header =() =>{
    return(
        <div className="header-eve">
            <Link  to={"/"} className="leftheader">
                <img className='logoheader' src="../../eve.png" alt="" />
            </Link>
            <div className="centerheader">
                <Link to={"/offer"} className='offer-eve-link' style={{textDecoration:"none"}}>
                    <div className="categorie-eve"> 
                        Ofertas 
                    </div>
                </Link>
                <Link to={"/woman"} className='woman-eve-link' style={{textDecoration:"none"}}>
                    <div className="categorie-eve"> 
                        Mujeres 
                    </div>
                </Link>
                <Link to={"/man"} className='man-eve-link' style={{textDecoration:"none"}}>
                    <div className="categorie-eve"> 
                        Hombres 
                    </div>
                </Link>
            </div>
            <div className="rightheader">
                <Link to={"/logIn"} className='logIn-eve-link' style={{textDecoration:"none"}}>
                    <div className="logIn-eve"> 
                        Log In 
                    </div>
                </Link>
                <Link to={"/register"} className='register-eve-link' style={{textDecoration:"none"}}>
                    <div className="register-eve"> 
                        Register
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header