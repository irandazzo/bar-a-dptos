import Item from "../Item/Item";
import './ItemList.css';
import { Link } from "react-router-dom";

const ItemList = ({productList}) => {
    console.log(productList);

    return (
        <div className="container">
            <div className="itemList">
                {productList.map((product) =>
                <div className="card" key={product.id}>
                    <Link to={`/item/${product.id}`}>
                        <Item product={product}/>
                        <button>Ver Detalle</button>
                    </Link>
                </div>
                )}
            </div>
        </div>
    );
};

export default ItemList;