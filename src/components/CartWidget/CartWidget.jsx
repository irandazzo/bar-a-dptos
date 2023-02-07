import './CartWidget.css'
export default function CartWidget () {
    return (
        <div className='carrito'>
            <img src="./images/carrito.png" alt="carrito" /* width={`50px`} *//>
            <p className='numCarrito'>0</p>
        </div> 
    )
}