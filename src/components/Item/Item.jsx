import './Item.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({product}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.image} alt={product.name} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
      <h3>{product.description}</h3>
      <h4>${product.price}</h4>
      </Card.Text>
      <Button /* onClick={agregarAlCarrito} */ variant="primary">Detalle del Producto</Button>
    </Card.Body>
  </Card>

/* 
    <div className='item'>
      <img alt={product.name} src={product.image}/>
      <h3>{product.name}</h3>
      <h3>{product.description}</h3>
      <h4>${product.price}</h4>
    </div> */
  );
};



export default Item;