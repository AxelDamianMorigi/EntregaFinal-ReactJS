import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = await getDoc(collection(db, 'items', id));
        if (docRef.exists()) {
          setProduct({ id: docRef.id, ...docRef.data() });
        } else {
          console.error('No se encontró el producto con ID:', id);
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {product ? (
        <>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={product.pictureUrl} alt={product.title} />
          <p>Precio: ${product.price}</p>
         
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetail;
