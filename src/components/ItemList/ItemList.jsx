import Item from "../Item/Item";

const ItemList = ({productList}) => {
    console.log(productList);

    return (
        <div>
            {productList.map((product) =>
            <div>
                <Item product={product}/>
            </div>
            )}
        </div>
    );
};

export default ItemList;