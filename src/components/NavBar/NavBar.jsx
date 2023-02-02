import './NavBar.css';
import ListItems from "./ListItems/ListItems";
import CartWidget from "./CartWidget/CartWidget";


export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <ListItems nombre="Inicio" />
        <ListItems nombre="Cervezas" />
        <ListItems nombre="Aperitivos" />
        <ListItems nombre="Espumantes" />
      </ul>
      <div>
  {/*     <CartWidget /> */}
      </div>
    </nav>
  );
}
