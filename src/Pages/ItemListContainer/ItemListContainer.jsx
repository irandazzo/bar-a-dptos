import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const ItemListContainer = ({greeting})=>{
const [productList, setProductList] = useState([]);
const {categoryId} = useParams();

/* const {categoryId} = useParams();
const getProducts = new Promise ((res, rej)=>{
    if(categoryId){
        const filterProducts = products.filter((item)=> item.category == categoryId);
        setTimeout(()=>{
        res(filterProducts);
        },1000);
    } else{
    setTimeout(()=>{
    res(products);
    },1000);
}
}); */

const getProducts = () => {
    const dataBase = getFirestore();
    const querySnapshot = collection (dataBase, "products");

    getDocs(querySnapshot)
    .then((response) => {
        const list = response.docs.map((doc) => {
            console.log(doc);
            return {
                id: doc.id, ...doc.data(),
            };
        });
        setProductList(list);
        console.log(list);
    })
    .catch((error) => console.log(error));
};

    useEffect(() => {
    getProducts();
    /* .then((response)=>{
    setProductList(response);
    })
    .catch((error)=>{
        console.log(error);
    }); */
}, [categoryId]);
    return(
        <div>
            <ItemList productList={productList}/>
        </div>
);
};

export default ItemListContainer;
