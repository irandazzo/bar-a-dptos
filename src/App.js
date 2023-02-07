import ItemListContainer from "./ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

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
