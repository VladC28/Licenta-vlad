import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

const CartPopup = ({ cartItems, removeFromCart, closePopup }) => {
  return (
    <div className="cart-popup">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))
      )}
      <button onClick={closePopup}>Close</button>
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <h1>Simple Shopping Cart</h1>
      <div>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <button onClick={openPopup}>Open Cart</button>
      {isPopupOpen && (
        <CartPopup cartItems={cartItems} removeFromCart={removeFromCart} closePopup={closePopup} />
      )}
    </div>
  );
};

export default App;
