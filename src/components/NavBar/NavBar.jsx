import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from "react-router-dom";
import { useContext } from 'react';
import {CartContext} from '../../context/CartContext';
const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src="./images/logofondo.png" alt="logo" width={`100px`}/>
      </div>
      <div className='menu'>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
            </li>
          <li>
            <Link to="/category/cervezas">Cervezas</Link>
          </li>
          <li>
            <Link to="category/aperitivos">Aperitivos</Link>
          </li>
          <li>
            <Link to="category/espumantes">Espumantes</Link>
          </li>
          <li>
            <Link to="/">Todos los Productos</Link>
          </li>
        </ul>
      </div>
      <div className='carrito'>
        <CartWidget/>
      </div>
    </div>
  );
}
export default NavBar;