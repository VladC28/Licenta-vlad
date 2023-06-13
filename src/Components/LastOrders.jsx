import React from 'react';
import { FaCheck } from 'react-icons/fa';

const LastOrders = () => {
  const orders = [
    { date: '2023-06-01', delivered: true, price: 50.99 },
    { date: '2023-05-25', delivered: false, price: 35.99 },
    { date: '2023-05-19', delivered: true, price: 45.99 },
    { date: '2023-05-12', delivered: true, price: 62.99 },
    { date: '2023-05-05', delivered: true, price: 28.99 },
  ];

  return (
    <div className="last-orders">
      <h2>Last Orders</h2>
      <div className="order-list">
        {orders.map((order, index) => (
          <div className="order" key={index}>
            <div className="order-info">
              <p>Date: {order.date}</p>
              <p>Delivered: {order.delivered ? 'Yes' : 'No'}</p>
            </div>
            <div className="order-price">
              <p>Price: ${order.price}</p>
              {order.delivered && (
                <div className="tick-icon">
                  <FaCheck />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastOrders;
