import { products } from "../../data/products";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
const ItemListContainer = ({greeting})=>{
const [productList, setProductList] = useState([]);
const {categoryId} = useParams();
const getProducts = new Promise ((res, rej)=>{
    if(categoryId){
        const filterProducts = products.filter((item)=> item.category == categoryId);
        setTimeout(()=>{
        res(filterProducts);
        },2000)
    } else{
    setTimeout(()=>{
    res(products);
    },2000)  
}
});
    useEffect(()=>{
    getProducts
    .then((response)=>{
    setProductList(response);
    })
    .catch((error)=>{
        console.log(error);
    });
}, [categoryId]);
    return(
        <div>
            <ItemList productList={productList}/>
        </div>
);
};

export default ItemListContainer;
