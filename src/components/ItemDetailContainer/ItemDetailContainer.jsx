// src/components/ItemDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemDoc = await getDoc(doc(db, 'items', id));
        if (itemDoc.exists()) {
          // Si el documento existe, actualiza el estado con los datos del artículo
          setItem({ id: itemDoc.id, ...itemDoc.data() });
        } else {
          console.error('El artículo no fue encontrado.');
        }
      } catch (error) {
        console.error('Error al obtener los detalles del artículo:', error);
      }
    };

    // Llamada a la función para obtener los detalles del artículo
    fetchItem();
  }, [id]); // Se ejecutará cada vez que cambie el ID en la ruta

  return (
    <div>
      <h2>Detalles del Artículo</h2>
      {item ? (
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>Precio: {item.price}</p>
          <p>Stock: {item.stock}</p>
          {/* Otros detalles del artículo según tu modelo de datos */}
        </div>
      ) : (
        <p>Cargando detalles del artículo...</p>
      )}
    </div>
  );
};

export default ItemDetail;
