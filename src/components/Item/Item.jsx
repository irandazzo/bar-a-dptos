import './Item.css';

const Item = ({product}) => {
  return (
    <div className='item'>
      <img alt={product.name} src={product.image}/>
      <h3>{product.name}</h3>
      <h4>${product.price}</h4>
    </div>
  );
};



export default Item;