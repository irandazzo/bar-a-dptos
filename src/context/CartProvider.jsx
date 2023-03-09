import {CartContext} from "./CartContext";
import { useState } from "react";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQty, setTotalQty] = useState(0);
    
    const addItem = (item, quantity) => {
        console.log(isInCart(item.id));

        if (isInCart(item.id)){
            const newCart = cart.map ((product) => {
                if (product.id === item.id){
                    product.quantity = product.quantity + quantity;
                    return product
                }else {
                    return product
                }
            })
            setCart (newCart)
        } else{
            const product = {
                id: item.id,
                name: item.title,
                description: item.description,
                price: item.price,
                quantity: quantity,
                category: item.category,
                stock: item.stock,
                image: item.image
            };
            setCart([...cart, product]);
            setTotalPrice (totalPrice + (product.price * product.quantity));
            
        }
    };


    const clear = () => {
        setCart([]);
        setTotalPrice(0);
    };

    const removeItem = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));
        setTotalPrice(totalPrice - productId.price);

    };

    const isInCart = (productId) => {
        if (cart.find((product) => product.id === productId)){
            return true;
        } else {
            return false;
        }
    };

    return (
    <CartContext.Provider value={{cart, addItem, totalPrice, clear, removeItem, }}>
        {children}
    </CartContext.Provider>
    );
};
export default CartProvider;