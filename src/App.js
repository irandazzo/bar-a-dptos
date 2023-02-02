import './App.css';
import Logo from "./components/Logo/cart.png";
import NavBar from "./components/NavBar/NavBar";
/* import Title from './components/Title/Title';
import NavBar from './components/NavBar/NavBar';
import Logo from './components/Logo/logo'; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={Logo} className="logo" alt="logo" />
      < NavBar />
      </header>
    </div>
  );
}

export default App;
