import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from "../../components/ItemList/ItemList";
import {products} from "../../data/products";

    const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState ([]);

    const getProducts = new Promise ((res, rej) => {
        setTimeout(() => {
            res (products)
        }, 3000);
    });

    useEffect(() => {
        getProducts
        .then ((response) => {
            console.log(response);
            setProductList(response)
        })
        .catch ((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div> <ItemList productList={productList}/> </div>
    );
};

export default ItemListContainer;
