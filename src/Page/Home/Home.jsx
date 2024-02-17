import React from 'react'
import './home.css'
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import Widget from '../../Components/widgets/Widgets'
import Featured from '../../Components/featured/Featured'
import Chart from '../../Components/charts/Charts'
import Tabla from '../../Components/tabla/Tabla'
import { tablaSources } from '../../tablaSource'


function Home ({type,title}){

    const { columns, rows } = tablaSources[type] || {};

    return <div className="home">
        <Sidebar/>
        <div className="home-container">
            <Navbar/>
            <div className="widgets">
                <Widget type="usuario"/>
                <Widget type="pedido"/>
                <Widget type="envio"/>
            </div>
            <div className="charts">
                <Featured/>
                <Chart aspect={2.5/1} title="Ultimos 6 meses"/>
            </div>
            <div className="tabla">
                <Tabla
                    title={title}
                    columns={columns}
                    rows={rows}
                />
            </div>
        </div>
    </div>
}

export default Home