import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";
import "./Cart.css";

const Cart = () => {
  const {cart, totalPrice, clear, removeItem} = useContext(CartContext);
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
    <div className="cartList">
      {cart.length > 0 && (
        <table>
          <thead>
            <tr>
              <th className="tablaTotal"></th>
              <th className="tablaTotal">Producto</th>
              <th className="tablaTotal">Cant.</th>
              <th className="tablaTotal">P. Unitario</th>
              <th className="tablaTotal">Subtotal</th>
              <th className="tablaTotal"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={`/images/${product.image}`} width="140px" alt={product.name}/>
                </td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>${product.price}</td>
                <td>${product.price * product.quantity}</td>
                <td>
                  <button className="trashButton"onClick={() => removeItem(product.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                      width="32" height="32" viewBox="0 0 32 32">
                      <path fill="none" stroke="white" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" stroke-width="2" 
                      d="M28 6H6l2 24h16l2-24H4m12 6v12m5-12l-1 12m-9-12l1 12m0-18l1-4h6l1 4"/></svg>
                  </button>
                </td>
              </tr>
              // <div key={producto.id} className="itemCarrito">
              //   <img className="imgProdCarrito" src={producto.image} alt=""/>
              //   <h3>{producto.nombre}</h3>
              //   <h4>{producto.cantidad}</h4>
              //   <img className="removeItem" onClick={()=> removerItem (producto.id)} src={remover} alt=""/>
              // </div>
            ))}
            
            <th></th>
            <th></th>
            <th></th>
            <th className="tablaTotal">Total:</th>
            <th className="tablaTotal">$ {totalPrice}</th>
            <th>{cart.length > 0 && <button className="trashButton1"onClick={clear}>Vaciar Carrito</button>}</th>            
          </tbody>
        </table>
        )}

          {cart.length > 0 && (
          <div className="botonesCarrito">
            <button onClick={() => navigate (`/`)}>Seguir Comprando</button>
            <button onClick={createOrder}>Completar Compra</button>
          </div>
          
        )}
        {/* {cart.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>Cantidad</th>
                <th>Cantidad</th>
                <th>Cantidad</th>
                <th>Cantidad</th>
                <th>Cantidad</th>
              </tr>
            </thead>
          </table>
        )} */}
     {/*  {cart.map((product) => (
          
          <div className="cartDetail" key={product.name}>
            
            <div className="itemCart">
              <img src= {`/images/${product.image}`}  alt="" width="150px" />
              <h2>{product.name}</h2>
              <h3>${product.price}</h3>
              <h5>{product.quantity}</h5>
            </div>
            <div className="buttonCart">
            <button onClick={() => removeItem(product.id)}>X</button>
            </div>
          </div>
        ))} */}
        
        
    
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
