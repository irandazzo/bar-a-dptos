import './Item.css';

const Item = ({product}) => {
  console.log(product.image);
  return (
    <div className='item'>
      <img className="imagenBebida" alt={product.title} src={`/images/${product.image}`}/>
      <h3>{product.title}</h3>
      <h4>Precio: ${product.price}</h4>
    </div>
  );
};

export default Item;