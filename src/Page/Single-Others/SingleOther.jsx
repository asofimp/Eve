import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import TablaContenido from "../../Components/tablaContenido/TablaContenido";
import "./singleOther.css";

const SingleOther = () =>{
    return <div className="singleOther">
        <Sidebar/>
        <div className="container-singleOther">
            <Navbar/>
            <TablaContenido/>
        </div>
    </div>
}

export default SingleOther