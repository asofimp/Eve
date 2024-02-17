import React from 'react'
import './list.css'
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import DataTable from '../../Components/dataTable/DataTable'
import { datatableSources } from '../../datatablesource'

function List ({rut, title, type}){

    const { columns, rows } = datatableSources[type] || {};

    return <div className="list">
        <Sidebar/>
        <div className="list-container">
            <Navbar/>
            <DataTable 
                rut={rut} 
                title={title}
                columns={ columns}
                rows={rows} 
            />
        </div>
    </div>
}

export default List