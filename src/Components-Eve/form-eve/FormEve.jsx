import "./formEve.css"
import Checkbox from '@mui/material/Checkbox';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";
import { dataType } from "../../formSource";


const FormEve = ({type}) =>{

    const data = dataType[type] || {};
    if (!data) {
        // Manejar el caso en el que data es undefined
        return <p>No hay datos disponibles.</p>;
      
    }
   
    return(
        <div className="formContainer">
                <form action="" className="formLogIn">
                    <h1 className="h1logIn">Bienvenid@</h1>

                    {data.map((inputs)=>(
                        <div key={inputs.id} className="containerformLogIn">
                            <label className="labelLogIn">{inputs.label}:</label>
                            <input placeholder={inputs.placeholder} type={`${inputs.type}`} className="inputLogIn" />
                        </div>                    
                    ))}
                    {
                        type === "logIn"
                        ?                    
                            <div className="buttonsUser">
                                <div className="rememberContainerlogin">
                                    <Checkbox size='small' className='checkbox' sx={{margin:"0"}}/> 
                                    <label className='remembertxt'>Recuerdame</label>
                                </div>
                                    <div className="forgetlogin">
                                    <span className="forgetspan">Olvide mi contraseña</span>
                                </div>
                            </div>
                        :
                        <></>
                    }

                    <Link to={type==="signUp" ? "/logIn" : "/"}>
                        <button className="buttonLogIn">
                            Ingresar
                        </button>
                    </Link>
                    <div className="otherlogin">
                        <FacebookIcon sx={{fontSize:"30px", margin:"5px"}}/>
                        <GoogleIcon sx={{fontSize:"30px", margin:"5px"}}/>
                    </div>
                </form>
            </div>
    )

}

export default FormEve