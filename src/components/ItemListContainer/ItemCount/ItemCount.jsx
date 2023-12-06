import React from "react";
import "./ItemCount.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);

  function Add() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="item-count">
      <button className="button" onClick={decrease}>
        -
      </button>

      <label className="amount"> {count} </label>

      <button className="button" onClick={Add}>
        +
      </button>
      <Link to={"/cart"}>
        <button onClick={() => onAdd(count)}> Añadir al Carrito</button>
      </Link>
    </div>
  );
};

export default ItemCount;