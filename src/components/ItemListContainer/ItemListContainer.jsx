import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { BiHappyBeaming } from "react-icons/bi";
import { data } from "../data/data.jsx";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemListContainer = (prop) => {
  const { id } = useParams();
  const [prod, setProd] = useState();

  const getBooks = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const response = await getBooks();
        setProd(response.filter((productos) => productos.category === id));
      } else if (prop === undefined) {
      
      } else {
        const response = await getBooks();
        setProd(response);
      }
    };

    fetchData();
  }, [id, prop]);

  return (
    <>
      <div className="greeting">
        Gracias por visitarnos {prop.greeting}
        <div className="greeting__icon">
          <BiHappyBeaming />
        </div>
      </div>

      {prod && (
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
