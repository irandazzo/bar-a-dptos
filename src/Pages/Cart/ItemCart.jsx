import { useState, useContext, useEffect } from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemCart = ({product}) => {
    const {updateItem} = useContext(CartContext)
    const [quantity, setQuantity] = useState(product.quantity);

    useEffect(() => {
        updateItem(product.id, quantity);
    }, [quantity]);
    
    return (
    <>          
        <thead>
            <tr>
                <th /* className="tableHead" */></th>
                <th /* className="tableHead" */>Producto</th>
                <th /* className="tableHead" */>Cantidad</th>
                <th /* className="tableHead" */>P. Unitario</th>
                <th /* className="tableHead" */>Subtotal</th>
                {/* <th className="tablaTotal">Total</th> */}
            </tr>
        </thead>
                <tbody>
                    <td>
                    <img src={`/images/${product.image}`} width="140px" alt={product.name}/>
                    </td>
                    <td>{product.name}</td>
                    <td className="itemCount"><ItemCount count={quantity} setCount = {setQuantity}/></td>
                    <td>${product.price}</td>
                    <td>${product.price * product.quantity}</td>
                </tbody>
                
                
    </>
    )
}

export default ItemCart;