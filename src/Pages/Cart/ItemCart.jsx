import { useState, useContext, useEffect } from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import "./ItemCart.css";

const ItemCart = ({ product }) => {
const { updateItem, removeItem } = useContext(CartContext);
const [quantity, setQuantity] = useState(product.quantity);

useEffect(() => {
    updateItem(product.id, quantity);
}, [quantity]);
return (
    <>
    <div className="cartList">
        <div className="detailProduct">
        <img
        className="imageProduct"
        src={`/images/${product.image}`}
        alt={product.name}
        />
        <h2>{product.name}</h2>
        <h3>
        <ItemCount count={quantity} setCount={setQuantity} />
        </h3>
        <h3 className="totales">P. Unitario: ${product.price}</h3>
        <h3 className="totales">Subtotal: ${product.price * product.quantity}</h3>
        </div>
        <div className="trashButton">
        <button onClick={() => removeItem(product.id)}>
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
        </div>
    </div>
    </>
    );
};

export default ItemCart;
