import './Item.css';

const Item = ({product}) => {
  return (
    <div className='item'>
      <img alt={product.name} src={product.image} width="100px"/>
      <h3>{product.name}</h3>
      <h3>{product.description}</h3>
      <h4>${product.price}</h4>
    </div>
  );
};

export default Item;