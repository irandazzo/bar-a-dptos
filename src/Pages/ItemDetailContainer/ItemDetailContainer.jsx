import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  ItemDetail  from "../../components/ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [detailObject, setDetailObject] = useState({});
    
    const getProduct = () => {
        const dataBase = getFirestore();
        const querySnapshot = doc(dataBase, "products", id);

        getDoc(querySnapshot) 
        .then((res) => {
            setDetailObject({
                id: res.id, ...res.data()
            })
        })
        .catch((error) => console.log(error))
    }

    useEffect(() => {
        getProduct();
    },[]);
    return (
        <div>
            <ItemDetail detail={detailObject}/>
        </div>
    );
};

export default ItemDetailContainer;