// components/ItemListContainer/ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import '../ItemListContainer/ItemListContainer.css';
import { BiHappyBeaming } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useCartContext } from '../../contexto/CartContext';

const ItemListContainer = () => {
  const { id } = useParams();
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, isItemInCart, canAddToCart } = useCartContext();

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'productos'));
      const response = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      if (id) {
        setProd(response.filter((producto) => producto.category === id));
      } else {
        setProd(response);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      <div className="greeting">
        Gracias por visitarnos
        <div className="greeting__icon">
          <BiHappyBeaming />
        </div>
      </div>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="div_card">
          <ul className="p_card">
            {prod.map((p) => (
              <li className="li_card" key={p.id}>
                <img src={p.pictureUrl} alt={p.title} />

                <div className="b_card">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <p>Precio: ${p.price}</p>
                  <p>Stock: {p.stock}</p>

                  {canAddToCart(p.id, 1) ? (
                    <button onClick={() => addToCart(p)}>Agregar al Carrito</button>
                  ) : (
                    <p>No hay suficiente stock para agregar al carrito</p>
                  )}

                  {isItemInCart(p.id) && (
                    <p>Este producto está en tu carrito</p>
                  )}

                  <Link to={`/item/${p.id}`} className="link">
                    Ver Detalles
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
