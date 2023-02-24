import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import './CartWidget.css'
const CartWidget = () => {
    const {cart} = useContext(CartContext);
    console.log(cart);
    return (
        <div className='carrito'>
            <img src="./images/carrito.png" alt="carrito"/>
            {cart?.lenght}
        </div> 
    );
};
export default CartWidget;