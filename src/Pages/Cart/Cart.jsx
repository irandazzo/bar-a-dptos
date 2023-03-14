import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";
import "./Cart.css";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, clear, removeItem, total } = useContext(CartContext);
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();

  const createOrder = (event) => {
    event.preventDefault();
    const dataBase = getFirestore();
    const querySnapshot = collection(dataBase, "orders");

    if (!formValue.name || !formValue.phone || !formValue.email) {
      Swal.fire({
        title: "Por favor complete todos los campos para finalizar la compra",
        icon: "warning",
      });
    } else {
      addDoc(querySnapshot, {
        buyer: {
          email: formValue.email,
          name: formValue.name,
          phone: formValue.phone,
        },
        products: cart.map((product) => {
          return {
            title: product.name,
            price: product.price,
            id: product.id,
            quantity: product.quantity,
          };
        }),
        total: total,
      })
        .then((response) => {
          console.log(response.id);
          Swal.fire({
            title: `Orden con el Id: ${response.id} ha sido creada`,
            icon: "success",
          });
          updateStocks(dataBase);
        })
        .catch((error) => console.log(error));
    }
  };

  const updateStocks = (dataBase) => {
    cart.forEach((product) => {
      const querySnapshot = doc(dataBase, "products", product.id);
      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
        .then(() => {
          alert(`El stock de los productos ha sido actualizado`);
        })
        .catch((error) => console.log(error));
    });
  };

  const handleInput = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="cartTable">
      {cart.length > 0 && (
        <section>
          <table>
            <thead>
              <tr className="backgroundTitles">
                <th></th>
                <th>Producto</th>
                <th>Cant.</th>
                <th>P. Unitario</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      className="imageProduct"
                      src={`/images/${product.image}`}
                      alt={product.name}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>${product.price}</td>
                  <td>${product.price * product.quantity}</td>
                  <td className="trashButton">
                    <button onClick={() => removeItem(product.id)}>
                      Eliminar Producto
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="none"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M28 6H6l2 24h16l2-24H4m12 6v12m5-12l-1 12m-9-12l1 12m0-18l1-4h6l1 4"
                        />
                      </svg>
                    </button>
                  </td>
                  <td>
                    <img
                      className="removeItem"
                      onClick={() => removeItem(product.id)}
                      src="#"
                      alt=""
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td className="backgroundTitles"></td>
                <td className="backgroundTitles"></td>
                <td className="backgroundTitles"></td>
                <td className="backgroundTitles"></td>
                <td className="totalPrice backgroundTitles">Total a pagar:</td>
                <td className="totalPrice backgroundTitles">${total}</td>
                <td className="backgroundTitles"></td>
              </tr>
            </tbody>
          </table>
          <div>
            <form className="cartForm">
              <span>Complete sus datos para finalizar la compra</span>
              <input
                className="cartInput"
                type="text"
                placeholder="Nombre"
                value={formValue.name}
                onChange={handleInput}
                name="name"
              />
              <input
                className="cartInput"
                type="text"
                placeholder="Teléfono"
                value={formValue.phone}
                onChange={handleInput}
                name="phone"
              />
              <input
                className="cartInput"
                type="email"
                placeholder="Email"
                value={formValue.email}
                onChange={handleInput}
                name="email"
              />
              <div className="botonesCarrito">
                <button onClick={createOrder}>Completar Compra</button>
              </div>
            </form>
          </div>
        </section>
      )}

      {cart.length > 0 && (
        <div className="botonesCarrito">
          <button onClick={() => navigate(`/`)}>Seguir Comprando</button>
          <button className="trashButton1" onClick={clear}>
            Eliminar Carrito
          </button>
        </div>
      )}
      {cart.length === 0 && (
        <div className="carritoVacio">
          <span>Carrito Vacio</span>
          <img src="/images/empty-cart.png" alt="" />
        </div>
      )}
    </div>
  );
};

export default Cart;
