import { Link } from 'react-router-dom'
import './register.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormEve from '../../Components-Eve/form-eve/FormEve';

const Register = () =>{
    return(
        <div className="register">
            <div className="register-left">
                <img src='./eve.png' alt='' className='logo-eve-register'/>
                <img className='register-img' src="https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="register-right">
                <Link to="/" className="gobackRegister">
                    <ArrowBackIcon className='gobackbutton'/>
                    <span className='gobacktxt'>Regresar</span>
                </Link>
                <div className="form-signUp">
                    <FormEve type={"signUp"}/>
                </div>
            </div>

        </div>
    )
}

export default Register