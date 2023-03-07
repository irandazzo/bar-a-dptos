import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';

const ItemDetail = ({detail}) => {
  const navigate = useNavigate();
  const {addItem} = useContext(CartContext);
  const [count, setCount] = useState(1);

/* const agregarAlCarrito = (event) => {
  event.preventDefault()

  console.log({...detail, quantity: count });
}; */
  return (
    <div className='cardDetail'>
      <img src={detail.image} alt={detail.name} width="200px"/>
      <h2>{detail.name}</h2>
      <h3>${detail.price}</h3>
      <ItemCount count={count} setCount={setCount} />
      <button onClick={() => navigate (`/`)}>Seguir Comprando</button>
      <button onClick={() => addItem(detail, count)}>Agregar al Carrito</button>
      <button onClick={() => navigate (`/cart`)}>Terminar Compra</button>
    </div>
  );
}

export default ItemDetail;