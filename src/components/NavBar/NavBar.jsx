import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src="./images/logofondo.png" alt="logo" width={`100px`}/>
      </div>
      <div className='menu'>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            </li>
          <li>
            <Link to="/category/Cervezas">Cervezas</Link>
          </li>
          <li>
            <Link to="category/Aperitivos">Aperitivos</Link>
          </li>
          <li>
            <Link to="category/Espumantes">Espumantes</Link>
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