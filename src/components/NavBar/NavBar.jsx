import React from "react";
import "./NavBar.css";
import { BsBook } from "react-icons/bs";
import { TbTriangleInverted } from "react-icons/tb";
import { Link } from "react-router-dom";
import { data } from "../data/data.jsx"; // Importa el archivo data.jsx

const NavBar = ({ children }) => {
  // Filtra las categorías únicas de tus productos
  const categories = [...new Set(data.map((product) => product.category))];

  return (
    <div>
      <nav>
        <ul className="nav">
          <Link to="/" className="lnk">
            <li className="nav__title">
              <div className="nav__brand-icon">
                <BsBook />
              </div>
              <div className="nav__brand-name">Neo Celulares</div>
            </li>
          </Link>
          <li className="search">
            <div className="input-container">
              <input
                type="search"
                name=""
                id="search"
                className="search__input"
                placeholder="¿Qué estás buscando?"
              />
            </div>
          </li>
          <li className="buttons">
            <ul className="buttons__list">
              <li className="buttons__news">Novedades</li>
              <li className="buttons__promotions">Promociones</li>
              <li className="buttons_categories">
                Categorías
                <div className="buttons_categories-icon">
                  <TbTriangleInverted />
                </div>
                <ul className="items">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link to={`/category/${category}`} className="lnk">
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="buttons_contact">Contacto</li>
            </ul>
          </li>
          {children}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
