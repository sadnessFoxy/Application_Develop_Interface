import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartAtom, cartStats } from '../recoil/recoilCart';

const PRODUCTS = [
    { id: 1, name: 'iPhone 15 Pro', price: 999, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Samsung Galaxy S24', price: 899, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'MacBook Air M3', price: 1199, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Sony WH-1000XM5', price: 349, image: 'https://via.placeholder.com/150' },
];

function Cart() {
    const [cart, setCart] = useRecoilState(cartAtom);
    const { totalItems, totalPrice } = useRecoilValue(cartStats);

    const handleAddToCart = (product) => {
        setCart((oldCart) => {
            const existingItem = oldCart.find(item => item.id === product.id);
            if (existingItem) {
                return oldCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...oldCart, { ...product, quantity: 1 }];
        });
    };

    const handleIncrease = (id) => {
        setCart((oldCart) =>
            oldCart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrease = (id) => {
        setCart((oldCart) => {
            const item = oldCart.find(i => i.id === id);
            if (item.quantity === 1) {
                return oldCart.filter(item => item.id !== id);
            }
            return oldCart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };

    return (
        <div className="cart-container" style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Shopping Mall</h1>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '30px' }}>
                {/* Product List */}
                <div className="products-section">
                    <h2>Products</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        {PRODUCTS.map(product => (
                            <div key={product.id} style={{ 
                                border: '1px solid #ddd', 
                                borderRadius: '10px', 
                                padding: '15px', 
                                textAlign: 'center',
                                background: '#fff',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}>
                                <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '5px' }} />
                                <h3 style={{ fontSize: '1.1rem', margin: '10px 0' }}>{product.name}</h3>
                                <p style={{ fontWeight: 'bold', color: '#e44d26' }}>${product.price}</p>
                                <button 
                                    onClick={() => handleAddToCart(product)}
                                    style={{
                                        backgroundColor: '#007bff',
                                        color: 'white',
                                        border: 'none',
                                        padding: '8px 15px',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        transition: 'background 0.3s'
                                    }}
                                    onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                                    onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cart Section */}
                <div className="cart-section" style={{ 
                    background: '#f8f9fa', 
                    padding: '20px', 
                    borderRadius: '10px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    height: 'fit-content'
                }}>
                    <h2>Your Cart ({totalItems} items)</h2>
                    {cart.length === 0 ? (
                        <p style={{ color: '#666', fontStyle: 'italic' }}>Your cart is empty.</p>
                    ) : (
                        <div className="cart-items">
                            {cart.map(item => (
                                <div key={item.id} style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'center', 
                                    padding: '10px 0', 
                                    borderBottom: '1px solid #ddd' 
                                }}>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ margin: 0 }}>{item.name}</h4>
                                        <p style={{ margin: '5px 0', fontSize: '0.9rem', color: '#666' }}>
                                            ${item.price} x {item.quantity} = ${item.price * item.quantity}
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <button 
                                            onClick={() => handleDecrease(item.id)}
                                            style={{ padding: '2px 8px', borderRadius: '4px', border: '1px solid #ccc', cursor: 'pointer' }}
                                        >-</button>
                                        <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                                        <button 
                                            onClick={() => handleIncrease(item.id)}
                                            style={{ padding: '2px 8px', borderRadius: '4px', border: '1px solid #ccc', cursor: 'pointer' }}
                                        >+</button>
                                    </div>
                                </div>
                            ))}
                            <div style={{ marginTop: '20px', paddingTop: '10px', borderTop: '2px solid #333' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                    <span>Total:</span>
                                    <span style={{ color: '#e44d26' }}>${totalPrice.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;
