import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
/* import {products} from "./data/products"; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="*" element={<div><h1>Esta página no existe</h1></div>}/>
            <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/category/:categoryId" element= {<ItemListContainer/>}/>
          </Routes>
        </BrowserRouter>
      <div>
      
      </div>
      </header>
    </div>
  );
}

export default App;
