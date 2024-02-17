import React, { useState } from 'react'
import './new.css'
import Sidebar from "../../Components/sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
//import Select from 'react-select';
import { colorsOption, sizeOption } from '../../formSource';
import ReactSelect from 'react-select';


const New = ({inputs, title}) =>{
    const [file, setFile] = useState("");
    console.log(file)

    /*const [data, setData] = useState("")*/

    const [formData, setFormData] = useState({
        // Inicializa el estado con un objeto que contiene campos para cada entrada del formulario
        // Puedes ajustar esto según tus necesidades
       // colors: [],
        //sizes: [],
        // Otros campos del formulario
    });
    
    const GuardarDatos = (e) => {
        e.preventDefault();
        // Aquí puedes realizar cualquier validación o procesamiento adicional antes de guardar los datos
        // En este ejemplo, simplemente guardamos el estado formData en un arreglo
        const dataEnviar = [formData];
        console.log('pasa datos', dataEnviar);
    };
    
    const handleInputChange = (inputName, value) => {
        // Actualiza el estado formData según el nombre del campo de entrada y el valor
        setFormData({
          ...formData,
          [inputName]: value,
        });
    };

    return <div className="new">
        <Sidebar/>
        <div className="new-container">
            <Navbar/>
            <div className="top-new">
                <h1 className="agregar-title">{title}</h1>
            </div>
            <div className="bottom-new">
                <div className="left-new">
                    <form action="">
                        <label htmlFor='file'>
                            <img
                                className='add-img'
                                src={
                                    file
                                    ? URL.createObjectURL(file)
                                    : "https://cdn-icons-png.flaticon.com/256/6990/6990399.png"
                                }
                                alt=""
                            />
                        </label>
                        <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display:"none"}} />
                    </form>
                </div>
                <div className="right-new">
                    <form  className="form-new"  onSubmit={GuardarDatos}>
                        {inputs.map((inputs) =>
                            <div className="input-container" key={inputs.id}>
                                <label className="label-form">{inputs.label}</label> 
                                {
                                    inputs.label === "Colores" || inputs.label === "Tallas"
                                    ?
                                    <ReactSelect
                                        isMulti
                                        name="colors"
                                        options={ inputs.label ==="Colores" ?colorsOption : sizeOption}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={(selectedOption) =>
                                            handleInputChange(inputs.label.toLowerCase(), selectedOption)
                                        }
                                    />
                                    : 
                                    <input
                                        type={inputs.type} 
                                        placeholder={inputs.placeholder} 
                                        className="input-form"
                                        onChange={(e) => handleInputChange(inputs.label.toLowerCase(), e.target.value)}
                                    />
                                }
                            </div>
                        )}
                        <button  className='bottom-new-save' type='submit'>
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default New
