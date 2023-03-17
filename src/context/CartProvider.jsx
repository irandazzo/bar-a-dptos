import {CartContext} from "./CartContext";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState (0);

    useEffect(() => {
        setTotal (cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0))
    }, [cart]);
    
    
    

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
            const MySwal = withReactContent(Swal);
            MySwal.fire({
                position: 'center',
                title: 'Producto agregado al carrito',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
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
            
            
        }
    };


    const clear = () => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: '¿Está seguro que desea eliminar el carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar'
            }).then((result) => {
            if (result.isConfirmed) {
            clear();
            MySwal.fire(
                'Eliminado!',
                'El carrito ha sido eliminado.',
                'success'
            )
            }
            setCart([]);
        })
}

    const removeItem = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));
    };

    const isInCart = (productId) => {
        if (cart.find((product) => product.id === productId)){
            return true;
        } else {
            return false;
        }
    };

    const updateItem = (productId, newQuantity) => {
        const newCart = cart.map((product) => {
            if (productId === product.id) {
                return {
                    ...product,
                    quantity:newQuantity
                }
            } else {
                return product
            }
        })
        setCart (newCart);
    };


    return (
    <CartContext.Provider value={{cart, addItem, clear, removeItem, total , setCart, updateItem}}>
        {children}
    </CartContext.Provider>
    );
};
export default CartProvider;