import "./button.css";

const Boton = (props) =>{

    // Utiliza el hook useState correctamente

    return (
   
        <button className="boton">
            {props.texto}
        </button>
    );
}

export default Boton;