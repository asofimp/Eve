import Header from '../../Components-Eve/header/Header';
import './desktop.css';
import Footer from '../../Components-Eve/footer/Footer';
import Categorie from '../../Components-Eve/categories/Categories';

const Desktop = () =>{
    return (
        <div className="desktop">
            <Header/>
            <img src="https://images.pexels.com/photos/3735646/pexels-photo-3735646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="paginaPrincipal-img" />
            <h2 className="titleDesktop">Categorias:</h2>
            <div className="containercategories">
                <Categorie type="woman"/>
                <Categorie type="offer"/>
                <Categorie type="man"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Desktop