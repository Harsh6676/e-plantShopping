import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {

  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const parseCost = (cost) => {
    return Number(String(cost).replace('$', '').replace(',', ''));
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      return total + parseCost(item.cost) * item.quantity;
    }, 0);
  };

  const calculateTotalCost = (item) => {
    return parseCost(item.cost) * item.quantity;
  };

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();

    if (onContinueShopping) {
      onContinueShopping();
    }
  };

  const handleCheckout = () => {
    alert('Functionality Coming Soon');
  };

  return (
    <div className="cart-container">

      <h2 style={{ color: 'black' }}>
        Shopping Cart
      </h2>

      <h2 style={{ color: 'black' }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>

      {cart.length === 0 ? (

        <p style={{ color: 'black' }}>
          Your cart is empty.
        </p>

      ) : (

        <div>

          {cart.map((item) => (

            <div
              className="cart-item"
              key={item.name}
            >

              <img
                className="cart-item-image"
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-details">

                <div className="cart-item-name">
                  {item.name}
                </div>

                <div className="cart-item-cost">
                  Unit Price: {item.cost}
                </div>

                <div className="cart-item-quantity">

                  <button
                    className="cart-item-button cart-item-button-dec"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>

                  <span className="cart-item-quantity-value">
                    {item.quantity}
                  </span>

                  <button
                    className="cart-item-button cart-item-button-inc"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>

                </div>

                <div className="cart-item-total">
                  Total: ${calculateTotalCost(item)}
                </div>

                <button
                  className="cart-item-delete"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>
      )}

      <div
        style={{
          marginTop: '20px',
          color: 'black'
        }}
        className="total_cart_amount"
      >
      </div>

      <div className="continue_shopping_btn">

        <button
          className="get-started-button"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>

        <br />

        <button
          className="get-started-button1"
          onClick={handleCheckout}
        >
          Checkout
        </button>

      </div>

    </div>
  );
};

export default CartItem;

