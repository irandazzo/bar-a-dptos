import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({detail}) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

const agregarAlCarrito = (event) => {
  event.preventDefault()

  console.log({...detail, quantity: count });
};
  return (
    <div className='cardDetail'>
      <img src={detail.image} alt={detail.name} width="200px"/>
      <h2>{detail.name}</h2>
      <h3>${detail.price}</h3>
      <ItemCount count={count} setCount={setCount} />
      <button onClick={() => navigate (`/`)}>Seguir Comprando</button>
      <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
      <button onClick={() => navigate (`/cart`)}>Terminar Compra</button>
    </div>
  );
}

export default ItemDetail;