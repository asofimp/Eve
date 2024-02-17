import React, { useState, useEffect } from "react";
import './form.css';
import Campos from "../Campos";
import Boton from "../Button";

const Form = () =>{

    const [usuario, actualizarUsuario] = useState("");
    const [password, actualizarPassword] = useState("");
    const [entrar, actualizarEntrar] = useState(false);

    useEffect(() => {
        // Verifica si la validación fue exitosa y la variable entrar es verdadera
        if (entrar) {
            console.log("entro");
            // Realiza la redirección a la página "/home"
            window.location.href = "/admin/home";
        }
    }, [entrar]); // Se ejecuta el efecto cuando entrar cambia


    const ManejarEnvio = (e) => {
        e.preventDefault();
    
        // Validación básica (puedes mejorar esto según tus necesidades)
        if (usuario === "Admin" && password === "password") {
            // Autenticación exitosa, puedes redirigir o realizar acciones adicionales aquí
            console.log("entro")
            //Validacion
            actualizarEntrar(true);

        } else {
            //autenticacion erronea
            console.log("no entro");
        }
    };


    return <section className="form">
        <form onSubmit={ManejarEnvio} className="form-content">
            <Campos 
                tipo="text"
                titulo = "Usuario"
                placeholder = "Ingrese su Usuario"
                required
                valor ={usuario}
                actualizarValor = {actualizarUsuario}               
            />

            <Campos
                tipo="password"
                titulo = "Password"
                placeholder = "Ingrese su Contraseña"
                required
                valor ={password}
                actualizarValor = {actualizarPassword}              
            />
            <Boton texto = "Ingresar"/>
        </form>
    </section>
}

export default Form;