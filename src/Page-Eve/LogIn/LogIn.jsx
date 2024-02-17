import './logIn.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import FormEve from '../../Components-Eve/form-eve/FormEve';

const LogIn = () =>{

    return(
        <div className="loginContainer">
            <div className="login-left">
                <Link to="/" className="gobackLogin">
                    <ArrowBackIcon className='gobackbutton'/>
                    <span className='gobacktxt'>Regresar</span>
                </Link>
                <div className="form-login">
                    <FormEve type="logIn"/>
                </div>
            </div>
            <div className="login-right">
                <img src='./eve.png' alt='' className='logo-eve-login'/>
                <img className='login-img' src="https://images.pexels.com/photos/6347536/pexels-photo-6347536.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            </div>
        </div>
    )
}

export default LogIn