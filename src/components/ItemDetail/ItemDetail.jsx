import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';

const ItemDetail = ({detail}) => {
  const navigate = useNavigate();
  const {addItem} = useContext(CartContext);
  const [count, setCount] = useState(detail.stock === 0 ? 0 : 1);

/* const agregarAlCarrito = (event) => {
  event.preventDefault()

  console.log({...detail, quantity: count });
}; */
  return (
    <div className='container'>
        <img className='imageContainer' src={`/images/${detail.image}`} alt={detail.title} width="200px"/>
        <div className='detailContainer'>
          <h2>{detail.title}</h2>
        <div className='descriptionContainer'>
          <h3>{detail.description}</h3>
        </div>
        <div className='priceContainer'>
          <h3>${detail.price}</h3>
        </div>
        <ItemCount count={count} setCount={setCount} />
        <div className='buttonContainer'>
        <button className='addCartButton' onClick={() => addItem(detail, count)}>Agregar al Carrito</button>
          <button className='continueButton' onClick={() => navigate (`/`)}>Seguir Comprando</button>
          <button className='checkoutButton' onClick={() => navigate (`/cart`)}>Terminar Compra</button>
        </div>
        </div>
    </div>
  );
}

export default ItemDetail;