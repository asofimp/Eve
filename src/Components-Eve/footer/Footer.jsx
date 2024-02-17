import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
        <div className="footer">
            <div className="iconsfooter">
                <Link to={""} >
                    <FacebookIcon className="icon-footer" sx={{fontSize:"40px"}}/>
                </Link>
                <Link>     
                    <InstagramIcon className="icon-footer" sx={{fontSize:"40px"}}/>
                </Link>
                <Link>
                    <WhatsAppIcon className="icon-footer" sx={{fontSize:"40px"}}/>
                </Link>
            </div>
            <div className="logofooter">
                <img className='logo-eve-footer' src="./eve.png" alt="" />
            </div>
        </div>
    )
}

export default Footer