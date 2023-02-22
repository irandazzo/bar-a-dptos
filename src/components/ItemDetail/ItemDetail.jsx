import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({detail}) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

const agregarAlCarrito = (event) => {
  event.preventDefault()

  console.log({...detail, quantity: count });
};
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={detail.image} alt={detail.name} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          <h2>{detail.name}</h2>
          <h3>{detail.price}</h3>
          <h3>{detail.description}</h3>
        </Card.Text>
        <ItemCount count={count} setCount={setCount} />
        <Button onClick={() => navigate (`/`)} variant="primary">Seguir Comprando</Button>
        <Button onClick={agregarAlCarrito} variant="primary">Agregar al Carrito</Button>
        <Button onClick={() => navigate (`/cart`)} variant="primary">Finalizar Compra</Button>
      </Card.Body>
    </Card>
  );
}
   /*  <div className='detail'>
      <img src={detail.image} alt={detail.name} width="200px"/>
      <h2>{detail.name}</h2>
      <h3>{detail.price}</h3>
      <h3>{detail.description}</h3>
      <ItemCount count={count} setCount={setCount} />
      <button onClick={() => navigate (`/`)}>Seguir Comprando</button>
      <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
      <button onClick={() => navigate (`/cart`)}>Terminar Compra</button>
    </div>
  );
}
 */
export default ItemDetail;