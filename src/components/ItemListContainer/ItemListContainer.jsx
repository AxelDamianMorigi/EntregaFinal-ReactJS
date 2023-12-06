import React from "react";
import "./ItemListContainer.css";
import { BiHappyBeaming } from "react-icons/bi";

import { data } from "../data/data.jsx";
import { useState } from "react";
import { useEffect } from "react";
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
    if (id) {
      getBooks().then((response) => {
        setProd(response.filter((productos) => productos.category == id));
      });
    } else if (prop == undefined) {
    } else {
      getBooks().then((response) => setProd(response));
    }
  }, [id]);
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
                <img src={p.pictureUrl} />

                <div className="b_card">
                  <Link to={`/item/${p.id}`} className="link">
                    Más Información
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