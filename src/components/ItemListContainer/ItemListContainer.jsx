import React, { useState, useEffect } from 'react';
import '../../components/ItemListContainer/ItemListContainer.css';
import { BiHappyBeaming } from 'react-icons/bi';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useCartContext } from '../../contexto/CartContext';

const ItemListContainer = () => {
  const { id } = useParams();
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, isItemInCart, canAddToCart, cart, deleteProduct, clearCart, checkout } = useCartContext();

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

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

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

                  {p.stock > 0 ? (
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

      {/* Mostrar información del carrito */}
      <div>
        <h2>Tu Carrito</h2>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            {cart.map((product) => (
              <div key={product.id} className="product-item">
                <h3>{product.title}</h3>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: ${product.price}</p>
                <p>Subtotal: ${product.price * product.quantity}</p>
                <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
              </div>
            ))}
            <h3>Total: ${calculateTotal()}</h3>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <button onClick={checkout}>Finalizar Compra</button>
          </>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
