import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
    const {cart} = useContext(CartContext);
    const [total, setTotal] = useState(0);
    
    useEffect (() => {
        setTotal(cart.reduce((prev, curr) => prev + curr.quantity, 0))
    }, [cart])

    return (
    <Link to={'/cart'}>
        <div className='cartIcon'>
            <img src="./images/carrito.png" alt="carrito" width="35px"/>
            <span className='cartCount'>{total}</span>        
        </div>
    </Link>
    );
};

export default CartWidget;