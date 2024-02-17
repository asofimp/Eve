// datatablesource.js
export const datatableSources = {
    // definición de las columnas para usuarios
    user: {
        columns:[
            { 
                field: 'id', 
                headerName: 'ID', 
                width: 70
            },
            { 
                field: 'nombre', 
                headerName: 'Nombre', 
                width: 120
            },
            { 
                field: 'apellido', 
                headerName: 'Apellido', 
                width: 120
            },
            { 
                field: 'usuario', 
                headerName: 'Usuario', 
                width: 170 ,
                renderCell: (params) =>
                `${params.row.nombre || ''} ${params.row.apellido || ''}`,    },
            { 
                field: 'email', 
                headerName: 'Email', 
                width: 150 
            },
            {
              field: 'edad',
              headerName: 'Edad',
              width: 100,
            },
            {
                field: 'estado',
                headerName: 'Estado',
                width: 120,
                renderCell: (params) => {
                    return (
                      <div className={`cellWithStatus ${params.row.estado}`}>
                        {params.row.estado}
                      </div>
                    );
                },      
              
            }
        ],
        // definición de las filas para usuarios
        rows:[
            { id: 1,nombre: 'Julio',apellido: 'Jon', email: 'Jon@gmail', edad: 35 , estado: 'pendiente'},
            { id: 2,nombre: 'Camila',apellido: 'Lannister' , email: 'Cersei@gmail', edad: 42 , estado: 'activo'},
            { id: 3,nombre: 'Marisa',apellido: 'Lannister' , email: 'Jaime@gmail', edad: 45 , estado: 'activo'},
            { id: 4,nombre: 'Jose',apellido: 'Aryan' , email: 'Arya@gmail', edad: 16 , estado: 'activo'},
            { id: 5,nombre: 'Ramon',apellido: 'Targaryen' , email: 'Daenerys@gmail', edad: null , estado: 'activo'},
            { id: 6,nombre: 'Rosa',apellido: 'Elizondo' , email: 'null@gmail', edad: 150 , estado: 'pendiente'},
            { id: 7,nombre: 'Julietta',apellido: 'Clifford' , email: 'Ferrara@gmail', edad: 44 , estado: 'activo'},
            { id: 8,nombre: 'Melissa',apellido: 'Frances'  , email: 'Rossini@gmail', edad: 36 , estado: 'activo'},
            { id: 9,nombre: 'Tyron',apellido: 'Harvey' , email: 'Harvey@gmail', edad: 65 , estado: 'desactivado'},
        ],
    },
    
    products: {
        // definición de las columnas para productos
        columns: [
            { 
                field: 'id', 
                headerName: 'ID', 
                width: 70
            },
            { 
                field: 'img', 
                headerName: 'Imagen', 
                width: 120,
                renderCell:(params) =>{
                    return(
                        <img src={`${params.row.img}`} alt="" className="imagen-tabla"/>
                    )
                },
            },
            { 
                field: 'articulo', 
                headerName: 'Articulo', 
                width: 120
            },
            { 
                field: 'colores', 
                headerName: 'Colores', 
                width: 120
            },
            { 
                field: 'tallas', 
                headerName: 'tallas', 
                width: 150 
            },
            {
              field: 'cantidad',
              headerName: 'Cantidad',
              width: 100,
            },
            {
                field: 'estado',
                headerName: 'Estado',
                width: 120,
                renderCell: (params) => {
                    return (
                      <div className={`cellWithStatus ${params.row.estado}`}>
                        {params.row.estado}
                      </div>
                    );
                },      
              
            }
        ],
        // definición de las filas para productos
        rows: [
            { id: 1, img:"https://images.pexels.com/photos/5617671/pexels-photo-5617671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", articulo: 'Vestido',precio: '150', colores: ['#00B8D9', '#0052CC', '#5243AA','#FF5630'], tallas: 'xs s m' , cantidad: 5, estado: 'pendiente'},
            { id: 2, img:"https://images.pexels.com/photos/14541223/pexels-photo-14541223.jpeg?auto=compress&cs=tinysrgb&w=600", articulo: 'Blusa',precio: 200 , colores: ['#00B8D9', '#0052CC', '#5243AA','#FF5630'], tallas: 'l' , cantidad: 15, estado: 'activo'},
            { id: 3, img:"https://images.pexels.com/photos/14541223/pexels-photo-14541223.jpeg?auto=compress&cs=tinysrgb&w=600", articulo: 'Falda',precio: 300 , colores: ['#00B8D9', '#0052CC', '#5243AA','#FF5630'], tallas: 's' , cantidad: 50, estado: 'activo'},
            { id: 4, img:"https://images.pexels.com/photos/19662126/pexels-photo-19662126/free-photo-of-sus-sonrisas.jpeg?auto=compress&cs=tinysrgb&w=600", articulo: 'Vestido',precio: 185 , colores:['#00B8D9', '#0052CC', '#5243AA','#FF5630'], tallas: 'm' , cantidad: 20, estado: 'activo'},
            { id: 5, img:"https://images.pexels.com/photos/19662126/pexels-photo-19662126/free-photo-of-sus-sonrisas.jpeg?auto=compress&cs=tinysrgb&w=600", articulo: 'Pantalon',precio: 190 , colores:['#00B8D9', '#0052CC', '#5243AA','#FF5630'], tallas: 's' , cantidad: 15, estado: 'activo'},
            { id: 6, img:"https://images.pexels.com/photos/19662126/pexels-photo-19662126/free-photo-of-sus-sonrisas.jpeg?auto=compress&cs=tinysrgb&w=600", articulo: 'Blusa',precio: 152 , colores:['#00B8D9', '#0052CC', '#5243AA','#FF5630'], tallas: 'xl' , cantidad: 25, estado: 'pendiente'},
            { id: 7, img:"https://images.pexels.com/photos/19662126/pexels-photo-19662126/free-photo-of-sus-sonrisas.jpeg?auto=compress&cs=tinysrgb&w=600", articulo: 'Sueter',precio: 154 , colores:['#00B8D9', '#0052CC', '#5243AA','#FF5630'], tallas: 'm' , cantidad: 3, estado: 'activo'},
            { id: 8, img:"https://images.pexels.com/photos/19662126/pexels-photo-19662126/free-photo-of-sus-sonrisas.jpeg?auto=compress&cs=tinysrgb&w=600", articulo: 'Sueter',precio: 165 , colores:['#00B8D9', '#0052CC', '#5243AA','#FF5630'], tallas: 'l' , cantidad: 2, estado: 'activo'},
            { id: 9, img:"https://images.pexels.com/photos/19662126/pexels-photo-19662126/free-photo-of-sus-sonrisas.jpeg?auto=compress&cs=tinysrgb&w=600", articulo: 'Chaqueta',precio: 185 , colores: ['#00B8D9', '#0052CC', '#5243AA','#FF5630'], tallas: 'xs' , cantidad: 4, estado: 'desactivado'},
        ],
    },
    
};

