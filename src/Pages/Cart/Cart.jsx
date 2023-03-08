import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";
import "./Cart.css";

const Cart = () => {
  const {cart, clear, removeItem} = useContext(CartContext);
  const navigate = useNavigate();
  const dataBase = getFirestore();
  const createOrder = (event) => {
    event.preventDefault();
    const querySnapshot = collection(dataBase, "orders"); 

    addDoc(querySnapshot, {
      buyer: {
        email: "test2@test.com",
        name: "Tomas",
        phone: "+11122334455"
      },
      products: cart.map((product) => {
        return {
          title: product.name,
          price: product.price,
          id: product.id,
          quantity: product.quantity
        }
      }),
      total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    })
    .then((response) => {
      console.log(response.id);
      alert(`Orden con el Id: ${response.id} ha sido creada`);
      updateStocks();
    })
    .catch((error) => console.log(error));
  };

  const updateStocks = () => {
    cart.forEach((product) => {
      const querySnapshot = doc(dataBase, "products", product.id)
      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
      .then(() => {
        alert(`El stock de los productos ha sido actualizado`);
      })
      .catch((error) => console.log(error));
    });
  };

  return (
    <div>
      {cart.map((product) => (
          
          <div className="cartDetail" key={product.name}>
            <img src= {`/images/${product.image}`}  alt="" width="150px" />
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <h5>{product.quantity}</h5>
            <button onClick={() => removeItem(product.id)}>X</button>
          </div>
        ))}
        <div className="vaciarCarrito">
        {cart.length > 0 && <button onClick={clear}>Vaciar Carrito</button>}
        </div>
        {cart.length > 0 && (
          <div className="botonesCarrito">
            <button onClick={() => navigate (`/`)}>Seguir Comprando</button>
            <button onClick={createOrder}>Completar Compra</button>
          </div>
        )}
        {cart.length === 0 &&
          <div className="carritoVacio">
            <span>Carrito Vacio</span>
            <img src="/images/empty-cart.png" alt="" />
          </div>
        }
    </div>
  );
};

export default Cart;
