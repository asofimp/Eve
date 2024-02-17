//import { Link } from 'react-router-dom';
import ContainerProduct from '../../Components-Eve/container-product/ContainerProduct';
import Footer from '../../Components-Eve/footer/Footer';
import Header from '../../Components-Eve/header/Header'
import './products.css'

const Product = ({type}) =>{

    let dataProduct;

    switch(type){
        case "woman":
            dataProduct={
                title:"Mujeres",
                img:"https://images.pexels.com/photos/1488464/pexels-photo-1488464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }
        break;
        case "offer":
            dataProduct={
                title: "Ofertas",
                img:"https://images.pexels.com/photos/5418930/pexels-photo-5418930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }
        break;
        case "man":
            dataProduct ={
                title: "Hombres",
                img:"https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }
        break;
        default:
        break;
    }

    return(
        <div className="product">
            <Header/>
            <img src={dataProduct.img} alt="" className="product-img" />
            <div to={`/${type}/125`} className="containerProduct-products">
                <h2 className="productsCatedories">{dataProduct.title}:</h2>
                <ContainerProduct/>
            </div>
            <Footer/>
        </div>
    )
} 

export default Product