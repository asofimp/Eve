import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Home from "./Page/Home/Home.jsx";
import List from "./Page/List/List.jsx";
import New from "./Page/New/New.jsx";
import Single from "./Page/Single/Single.jsx";
import { productInputs, userInputs } from "./formSource.js";
import "./Components/style/darkmode.css"
import { useContext} from "react";
import { DarkModeContext } from "./context/contextDarkMode.js";
import ListOrdersDelivery from "./Page/ListOrdersDelivery/ListOrdersDelivery.jsx";
import SingleOther from "./Page/Single-Others/SingleOther.jsx";
import Desktop from "./Page-Eve/Desktop/Desktop.jsx";
import Product from "./Page-Eve/Products/Products.jsx";
import Register from "./Page-Eve/Register/Register.jsx";
import LogInAdmin from "./Page/Log/LogInAdmin.jsx";
import LogIn from "./Page-Eve/LogIn/LogIn.jsx";
import SingleProduct from "./Page-Eve/Single-Product/SingleProduct.jsx";


function App() {
  
  const {darkMode} = useContext(DarkModeContext)

  return (
      <div id={darkMode ? "dark" :  "light"} className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Desktop/>}/>
              <Route path="offer">
                <Route index element={<Product type="offer"/>}/>
                <Route path=":offerId" element={<SingleProduct/>}/>
              </Route>
              <Route path="woman">
                <Route index element={<Product type="woman"/>}/>
                <Route path=":womanId" element={<SingleProduct/>}/>
              </Route>
              <Route path="man">
                <Route index element={<Product type="man"/>}/>
                <Route path=":manId" element={<SingleProduct/>}/>
              </Route>
              <Route path="logIn" element={<LogIn/>}/>
              <Route path="register" element={<Register/>}/>
            </Route>
          </Routes> 
          <Routes>
            <Route path="/admin">
              <Route index element={<LogInAdmin />} />
              <Route path="home" element={<Home type={"order"}/>} title=""/>
              <Route path="users">
                <Route index element={<List type={"user"} title="Usuarios" rut={"/admin/users/new"}/>} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New inputs={userInputs} title="Agregar Usuario"/>}/>
              </Route>
              <Route path="products">
                <Route index element={<List type={"products"} title="Productos" rut={"/admin/products/new"}/>} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New inputs={productInputs} title="Agregar Producto"/>}/>
              </Route>
              <Route path="orders">
                <Route index element={<ListOrdersDelivery type={"order"} title="Pedidos"/>} />
                <Route path=":orderId" element={<SingleOther />} />
              </Route>
              <Route path="delivery">
                <Route index element={<ListOrdersDelivery type={"delivery"} title="Envios"/>} />
                <Route path=":deliveryId" element={<SingleOther />} />
              </Route>
              <Route path="single">
                <Route index element={<Single/>}/>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}
export default App;

  