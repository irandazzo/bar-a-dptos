import ListItems from "./ListItems/ListItems";
import CartWidget from "./CartWidget/CartWidget";
import './NavBar.css';

export default function NavBar() {
  return (
      <nav className="navbar">
        <ul>
          <ListItems nombre="Inicio" />
          <ListItems nombre="Cervezas" />
          <ListItems nombre="Aperitivos" />
          <ListItems nombre="Espumantes" />
          <CartWidget />
        </ul>
      </nav>
  );
}