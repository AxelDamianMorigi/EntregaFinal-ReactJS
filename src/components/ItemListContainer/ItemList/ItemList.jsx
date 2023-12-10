import React from "react";

const ItemList = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>Precio: {item.price}</p>
          <img src={item.pictureUrl} alt={item.title} />
          <p>Stock: {item.stock}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
