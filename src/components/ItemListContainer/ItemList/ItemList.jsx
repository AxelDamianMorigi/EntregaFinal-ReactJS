import { useEffect } from "react";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

import React from "react";
import { useState } from "react";

const ItemList = () => {
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
    console.log(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  return <div>ItemList</div>;
};
export default ItemList;