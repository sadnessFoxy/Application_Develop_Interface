import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { productListAtom } from '../recoil/recoilProduct';
import { cartAtom } from '../recoil/recoilCart';
import { notificationAtom } from '../recoil/recoilNotification';

function ProductList() {
    const [state, setState] = useRecoilState(productListAtom);
    const setNotify = useSetRecoilState(notificationAtom);
    const [cart, setCart] = useRecoilState(cartAtom);

    const fetchProducts = async () => {
        setState(prev => ({ ...prev, loading: true, error: null }));
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setState({ data, loading: false, error: null });
        } catch (err) {
            setState({ data: [], loading: false, error: err.message });
        }
    };

    useEffect(() => {
        if (state.data.length === 0) fetchProducts();
    }, []);

    const addToCart = (product) => {
        setCart((oldCart) => {
            const existingItem = oldCart.find(item => item.id === product.id);
            if (existingItem) {
                return oldCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...oldCart, { id: product.id, name: product.title, price: product.price, quantity: 1 }];
        });
        setNotify({ message: `Added ${product.title} to cart`, type: 'success', visible: true });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Shop Products (B10: Global API)</h2>
            {state.loading && <p>Loading products...</p>}
            {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                {state.data.map(product => (
                    <div key={product.id} style={{ border: '1px solid #eee', padding: '15px', borderRadius: '10px', background: '#fff' }}>
                        <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
                        <h4 style={{ fontSize: '0.9rem', height: '40px', overflow: 'hidden' }}>{product.title}</h4>
                        <p style={{ fontWeight: 'bold' }}>${product.price}</p>
                        <button 
                            onClick={() => addToCart(product)}
                            style={{ width: '100%', padding: '8px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
