import "./tablaContenido.css";

const TablaContenido = () =>{
    return (
    <div className="tablaContenido">
        <div className="tablaContenido-header">
            <h1 className="tablaContanido-title">Orden #50</h1>
            <div className="tablaContenido-edit">Editar</div>
            <div className="tablaContenido-delete">Eliminar</div>
        </div>
        <div className="tablaContenido-container">
            <div className="tablaContenido-left">
                <img src="https://images.pexels.com/photos/5617671/pexels-photo-5617671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="tablaContenido-img" />
                <h2 className="tablaContenido-product">Vestido Verano (Verde)</h2>
            </div>
            <div className="tablaContenido-right">
                <h2 className="tablaContenido-info">Información de pedido</h2>
                <div className="tablaContenido-contenido">
                <div className="detalle-container">
                    <div className="tablaContenido-details">
                        <span className="tablaContenido-detailsTitle">Cliente:</span>
                        <div className="tablaContenido-detailsdato">Camila Lannister</div>
                    </div>
                    <div className="tablaContenido-details">
                        <span className="tablaContenido-detailsTitle">Fecha:</span>
                        <div className="tablaContenido-detailsdato">1 Marzo</div>
                    </div>
                </div>
                <div className="detalle-container">
                    <div className="tablaContenido-details">
                        <span className="tablaContenido-detailsTitle">Monto:</span>
                        <div className="tablaContenido-detailsdato">785</div>
                    </div>
                    <div className="tablaContenido-details">
                        <span className="tablaContenido-detailsTitle">Metodo:</span>
                        <div className="tablaContenido-detailsdato">Pago Contra Entrega</div>
                    </div>
                    <div className="tablaContenido-details">
                        <span className="tablaContenido-detailsTitle">Estado:</span>
                        <div className="tablaContenido-detailsdato">Aprobado</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>    )
}

export default TablaContenido