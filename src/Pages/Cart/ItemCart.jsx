import { useState, useContext, useEffect } from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import "./ItemCart.css";
const ItemCart = ({ product }) => {
const { updateItem } = useContext(CartContext);
const [quantity, setQuantity] = useState(product.quantity);

useEffect(() => {
    updateItem(product.id, quantity);
}, [quantity]);
return (
    <>
        <div className="cartTable">
        <td>
        <img
            className="imageProduct"
            src={`/images/${product.image}`}
            alt={product.name}
        />
        </td>
        <td>{product.name}</td>
        <td /* className="itemCount" */>
        <ItemCount count={quantity} setCount={setQuantity} />
        </td>
        <td>${product.price}</td>
        <td>${product.price * product.quantity}</td>
        </div>
    </>
    
    );
};

export default ItemCart;
