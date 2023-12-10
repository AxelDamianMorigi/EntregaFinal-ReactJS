import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItemData = async () => {
      const db = getFirestore();
      const docRef = doc(db, "items", id);
      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data() });
      } else {
        console.log("No such document!");
      }
    };

    getItemData();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="div-card">
      <ul className="li-card">
        <li className="li_description">{item.description} </li>
        <li className="li_title">{item.title} </li>
        <img src={item.pictureUrl} alt={item.title} className="img_product" />
        <div className="b-card">
          <li className="li_price">{item.price}</li>
        </div>
      </ul>
    </div>
  );
};

export default ItemDetail;
