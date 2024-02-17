import './singleProduct.css';
import Header from '../../Components-Eve/header/Header';


const SingleProduct = () =>{
    return(
        <div className="singleProduct">
            <Header/>

            <div className="singleProduct-left">
                <img src="https://images.pexels.com/photos/1936854/pexels-photo-1936854.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="singleProduct-img" />
                <div className="singleProduct-imgconjunt">
                </div>
            </div>
            <div className="singleProduct-right">
                right
            </div>

        </div>
    )
}

export default SingleProduct

