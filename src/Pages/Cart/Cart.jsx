import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const {cart, clear, removeItem} = useContext(CartContext);
  return (
  <div >
    {cart.map((product) => (
        <div className="cartDetail" key={product.name}>
          <img src= {product.image} alt="" width="150px" />
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          <h5>{product.quantity}</h5>
          <button onClick={() => removeItem(product.id)}>Eliminar producto </button>
        </div>
      ))}
      {
        cart.length > 0 && <button onClick={clear}>Vaciar Carrito</button>
      }
  </div>
  );
};

export default Cart;
