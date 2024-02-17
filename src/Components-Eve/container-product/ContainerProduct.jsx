import { datatableSources } from "../../datatablesource";
import "./containerProduct.css";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Link } from "react-router-dom";



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const ContainerProduct = ()=>{
    const data = datatableSources.products.rows;

    return(
        <div className="containerProduct-container">
            {data.map((item)=>(
                <div className="containerProduct">
                    <span key={item.id}></span>
                    <div  className="components-principal">
                        <Link to={"/"}>
                        <span className="containerProduct-añadir">Añadir a la cesta</span>
                        </Link>
                        <Link to={"/woman/1235" } style={{textDecoration:"none"}} >
                        <img src={item.img} alt="" className="containerProduct-img" />                                        
                        </Link>
                    </div>
                    <div className="containerProduct-left">
                        <span className="containerProduct-span">{item.articulo}</span>
                        <div className="moldeColores">
                        {(item.colores.map((colores)=>
                            <div  className="molde" style={{backgroundColor:`${colores}`, borderColor:`${colores}`}}></div>
                        ))}
                        </div>
                    </div>
                    <div className="containerProduct-right">
                        <span className="containerProduct-precio">Q{item.precio}</span>
                        <div className="buttonsReaction">
                            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"brown"}}/>} />
                            <Checkbox
                            {...label}
                            icon={<BookmarkBorderIcon />}
                            checkedIcon={<BookmarkIcon sx={{color:"brown"}} />}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContainerProduct