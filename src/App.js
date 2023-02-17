import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
/* import {products} from "./data/products"; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
      < NavBar />
      </div>
      <section> 
      <ItemListContainer greeting={"Bar a Dptos"}/>
      </section>
      </header>
    </div>
  );
}

export default App;
