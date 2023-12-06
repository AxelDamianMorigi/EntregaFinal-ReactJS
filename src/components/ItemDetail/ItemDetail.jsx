import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/data.jsx";
import ItemCount from "../ItemListContainer/ItemCount/ItemCount.jsx";
import "./ItemDetail.css";
import { useCartContext } from "../context/CartContext.jsx";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

const ItemDetail = (ident) => {
  const { addNewProduct } = useCartContext();

  const { id } = useParams();

  const onAdd = (quantity) => {
    const newProduct = { ...ItemCol, quantity };
    addNewProduct(newProduct);
  };

  const [item, setItem] = useState({});
  const [ItemCol, setItemCol] = useState([]);
  useEffect(() => {
    getItemData();
    getItems();
  }, []);

  const getItemData = () => {
    const db = getFirestore();
    const docRef = doc(db, "items", "Hv3r9WFJQuQGBn6V22BV");
    getDoc(docRef).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    });
    console.log(item);
  };

  const getItems = async () => {
    const db = getFirestore();
    const collectionRef = collection(db, "items");
    const snapshot = await getDocs(collectionRef);
    setItemCol(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  return (
    <div className="div-card">
      <ul className="li-card" key={ItemCol}>
        <li className="li_description">{ItemCol.description} </li>

        <li className="li_title">{ItemCol.title} </li>
        <img src={ItemCol.pictureUrl} className="img_product" />
        <div className="b-card">
          <li className="li_price"> {ItemCol.price}</li>
          <ItemCount stock={ItemCol.stock} onAdd={onAdd} />
        </div>
      </ul>
    </div>
  );
};

export default ItemDetail;