import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Pages/Cart/Cart";
import CartProvider from "./context/CartProvider";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="*" element={<div><h1>Esta página no existe</h1></div>}/>
              <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/category/:categoryId" element= {<ItemListContainer/>}/>
              <Route path="/cart" element= {<Cart/>}/>
            </Routes>
            <Footer/>
          </CartProvider>
        </BrowserRouter>
      <div>
      
      </div>
      </header>
    </div>
  );
}

export default App;
