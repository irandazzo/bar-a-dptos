import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ()=>{
const [productList, setProductList] = useState([]);
const {categoryId} = useParams();
const getProducts = () => {
    const dataBase = getFirestore();
    const querySnapshot = collection (dataBase, "products");

    if(categoryId){
        const filteredQuery = query(querySnapshot, where("category", "==", categoryId))
        getDocs(filteredQuery)
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
    }else{
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
}
    useEffect(() => {
    getProducts();

}, [categoryId]);
    return(
        <div>
            <ItemList productList={productList}/>
        </div>
);
};

export default ItemListContainer;
