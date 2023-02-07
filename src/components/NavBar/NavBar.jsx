import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src="./images/logofondo.png" alt="logo" width={`100px`}/>
      </div>
      <div className='menu'>
        <ul>
          <li><a href="">Cervezas</a></li>
          <li><a href="">Aperitivos</a></li>
          <li><a href="">Espumantes</a></li>
          <li><a href="">Todos los Productos</a></li>
        </ul>
      </div>
      <div className='carrito'>
        <CartWidget/>
      </div>
    </div>
  );
}