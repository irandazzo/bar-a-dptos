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
import ItemCart from "./ItemCart";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Cart = () => {
  const { cart, clear, total } = useContext(CartContext);
  const [formValue, setFormValue] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    emailCheck: "",
  });

  const completeInputs = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      position: "center",
      icon: "warning",
      title: "Complete sus datos",
      text: "Complete todos los campos para finalizar la compra",
      showConfirmButton: true,
      timer: 5500,
    });
  };

  const mailError = () => {
    const MySwal = withReactContent(Swal);
      MySwal.fire({
      position: "center",
      icon: "error",
      title: "Error",
      text: "Los campos de email no coinciden",
      showConfirmButton: true,
      timer: 5500,
    });
  };

  const navigate = useNavigate();

  const createOrder = (event) => {
    event.preventDefault();
    const dataBase = getFirestore();
    const querySnapshot = collection(dataBase, "orders");

    if (!formValue.name || !formValue.lastName || !formValue.phone || !formValue.email) {
      completeInputs();
    } else if (formValue.email !== formValue.emailCheck) {
      mailError();
      } else {
      addDoc(querySnapshot, {
        buyer: {
          email: formValue.email,
          emailCheck: formValue.emailCheck,
          name: formValue.name,
          lastName: formValue.lastName,
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
          const MySwal = withReactContent(Swal);
          MySwal.fire({
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
    <div>
      {cart.length > 0 && (
        <section>
              {cart.map((product) => (
                <div>
                <div className="prueba"key={product.id}>
                  <div><ItemCart product={product}/></div>
                  </div>
                </div>
              ))}
                <div className="totalPrice">
                  <span>Total a pagar: ${total}</span>
                </div>
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
                placeholder="Apellido"
                value={formValue.lastName}
                onChange={handleInput}
                name="lastName"
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
              <input
                className="cartInput"
                type="email"
                placeholder="Repita su Email"
                value={formValue.emailCheck}
                onChange={handleInput}
                name="emailCheck"
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
