import './campos.css';

const Campos = (props) =>{

    const placeholderMod = `${props.placeholder}...`

    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }

    return(
        <div className="contenedor">
            <label className="contenedor-label text">
                {props.titulo}
            </label>
            <input className="contenedor-input"
                type={props.tipo}
                placeholder={placeholderMod}
                required = {props.required}
                value={props.valor}
                onChange={manejarCambio}
            />
        </div>
    )
}

export default Campos