import React, { useState } from 'react';

export default function CartPage() {
    
    const [quantity, setQuantity] = useState(1);
  const itemPrice = 71;
  const deliveryCharge = 25;
  const handlingCharge = 4;
  const total = itemPrice * quantity + deliveryCharge + handlingCharge;

  const handleIncrement = () => {
      setQuantity(quantity + 1);
    };

  const handleDecrement = () => {
      if (quantity > 1) {
          setQuantity(quantity - 1);
        }
    };
    return (
    <>
        
    <div className="cart-container" style={{ padding: '20px', maxWidth: '400px', backgroundColor: '#f8f8f8', borderRadius: '8px' }}>
      {/* <div className="cart-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4>My Cart</h4>
        <button style={{ background: 'none', border: 'none', fontSize: '16px' }}>✕</button>
      </div> */}
      
      <div className="delivery-info" style={{ background: '#f0f0ff', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span role="img" aria-label="timer">⏱️</span>
          <div>
            <p style={{ margin: 0 }}>Delivery in 8 minutes</p>
            <p style={{ margin: 0, fontSize: '12px' }}>Shipment of 1 item</p>
          </div>
        </div>
      </div>

      <div className="item-details" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
        <div className="item-image">
          <img src="https://via.placeholder.com/50" alt="Amul Taaza" style={{ borderRadius: '4px' }} />
        </div>
        <div className="item-info" style={{ flex: 1, paddingLeft: '10px' }}>
          <p>Amul Taaza Homogenised Tone Milk</p>
          <p>1L</p>
          <p>₹{itemPrice}</p>
        </div>
        <div className="quantity-control" style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={handleDecrement} style={{ padding: '5px 10px', fontSize: '16px' }}>−</button>
          <span style={{ margin: '0 10px' }}>{quantity}</span>
          <button onClick={handleIncrement} style={{ padding: '5px 10px', fontSize: '16px' }}>+</button>
        </div>
      </div>

      <div className="bill-details" style={{ background: '#f0f0ff', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Items total</span>
          <span>₹{itemPrice * quantity}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Delivery charge</span>
          <span>₹{deliveryCharge}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Handling charge</span>
          <span>₹{handlingCharge}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginTop: '10px' }}>
          <span>Grand total</span>
          <span>₹{total}</span>
        </div>
      </div>

      <div className="cancellation-policy" style={{ marginTop: '15px', fontSize: '12px' }}>
        <p><strong>Cancellation Policy</strong></p>
        <p>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
      </div>

      <button style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', marginTop: '15px' }}>
        ₹{total} TOTAL - Login to Proceed
      </button>
    </div>
  
    </>
  );
};
