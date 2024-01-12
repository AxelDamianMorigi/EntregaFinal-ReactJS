import React from "react";
import { BsBook } from "react-icons/bs";
import { TbTriangleInverted } from "react-icons/tb";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { data } from "../data/data.jsx";
import "./NavBar.css";

const NavBar = () => {
  const categories = [...new Set(data.map((product) => product.category))];

  return (
    <nav className="navbar">
      <ul className="nav">
        <li className="nav__title">
          <Link to="/" className="lnk">
            <div className="nav__brand-icon">
              <BsBook />
            </div>
            <div className="nav__brand-name">Neo Celulares</div>
          </Link>
        </li>
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
        <li className="cart">
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
