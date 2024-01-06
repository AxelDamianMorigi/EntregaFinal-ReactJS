
import React, { useContext, useState } from 'react';
import { CartContext } from '../contexto/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from '../firebase/config'; 
import { useHistory } from 'react-router-dom'; 

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  const history = useHistory(); 

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = async () => {
    try {
     
      const isStockAvailable = checkStock(cart);

      if (!isStockAvailable) {
        console.error('No hay suficiente stock para completar la orden.');
        return;
      }

      const orderRef = await addDoc(collection(db, 'orders'), {
        items: cart,
        date: serverTimestamp(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        status: 'generada',
      });

      console.log('Orden creada con ID:', orderRef.id);

      clearCart();


      history.push('/gracias');
    } catch (error) {
      console.error('Error al realizar la compra:', error);
    }
  };


  const checkStock = (cart) => {
 
    const stockAvailable = cart.every((product) => product.quantity <= product.stock);

    return stockAvailable;
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleCheckout}>
          Realizar compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;
