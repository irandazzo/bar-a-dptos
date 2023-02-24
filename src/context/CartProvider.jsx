import {CartContext} from "./CartContext";
import { useState } from "react";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const product = {
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            quantity: quantity,
            category: item.category,
            stock: item.stock,
            image: item.image
        };
        setCart([...cart, product]);
        console.log(cart);
    };
    return (
    <CartContext.Provider value={{cart, addItem}}>
        {children}
    </CartContext.Provider>
    );
};
export default CartProvider;