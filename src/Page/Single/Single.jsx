import React from 'react'
import './single.css'
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import Charts from '../../Components/charts/Charts'
//import Tabla from '../../Components/tabla/Tabla'

function Single (){

    return <div className="single">
        <Sidebar/>
        <div className="single-container">
            <Navbar/>
            <div className="top-single">
                <div className="bottom-single">
                    <div className="left-single">
                        <div className="edit-bottom">Edit</div>
                        <h1 className="title-single">Informacion</h1>
                        <div className="item-single">
                            <img 
                                src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600' 
                                className="item-single-img" 
                                alt='Perfil'
                            />

                            <div className="details">
                                <h1 className="item-details-title"> 
                                    Jane Doe
                                </h1>
                                <div className="item-details">
                                    <span className="item-details-key">Email:</span>
                                    <span className="item-details-value">joedoe@gmail.com</span>
                                  </div>
                                <div className="item-details">
                                    <span className="item-details-key">Edad:</span>
                                    <span className="item-details-value">18</span>
                                </div>
                                <div className="item-details">
                                    <span className="item-details-key">Telefono:</span>
                                    <span className="item-details-value">+502 4552452</span>
                                </div>
                                <div className="item-details">
                                    <span className="item-details-key">Dirección:</span>
                                    <span className="item-details-value">Guatemala, Guatemala</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="right-single">
                    <Charts aspect={3/1} title="Compras (Ultimos 6 meses)"/>
                </div>        
            </div>
            <div className="table-single">
                <div className="bottom-single-tabla">
                    <h1 className="title-single-tabla">Transacciones</h1>

                </div>
            </div>
        </div>
    </div>
}


export default Single