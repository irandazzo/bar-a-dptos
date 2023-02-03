
import NavBar from "./components/NavBar/NavBar";
import Logo from './components/Logo/logo.svg';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Products
 from "./components/Products/Products";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div>
      < NavBar />
      </div>
      <main>
      <section>
        <ItemListContainer greeting="Bar a Dptos" />
      </section>
      <section>
        <Products/>
      </section>
      </main>
      </header>
    </div>
  );
}

export default App;
