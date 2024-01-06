import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { BiHappyBeaming } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemListContainer = () => {
  const { id } = useParams();
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(true);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <div className="p_card">
            {prod.map((p) => (
              <li className="li_card" key={p.id}>
                <img src={p.pictureUrl} alt={p.title} />

                <div className="b_card">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <Link to={`/item/${p.id}`} className="link">
                    Ver Detalles
                  </Link>
                </div>
              </li>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
