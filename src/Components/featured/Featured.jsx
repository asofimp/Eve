import "./featured.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
//es un componente que te ayuda a la creacion de ciertas graficas
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () =>{

    return(
        <div className="featured">
            <div className="top-featured">
                <h1 className="tittle-featured">Total:</h1>
                <MoreVertIcon fontSize="small"/>
            </div>
            <div className="bottom-featured">
                <div className="featured-chart">
                    <CircularProgressbar value={70} text="70%" strokeWidth={5} stroke="#D9C8A9;"/>
                </div>
                <p className="tittle-featured">Total de ventas en el día</p>
                <p className="amount">
                    Q500.00
                </p>
                <p className="desc">
                    Previous transactions processing. Last payments may not be included. 
                </p>
            </div>
        </div>
    )
}

export default Featured


//value pasa el porcentaje o el valor de la grafica, el texto lo que va en la grafica
//stronkewidth pasa el grosor de la grafica 