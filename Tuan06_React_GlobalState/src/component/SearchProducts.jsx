import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { searchState } from '../recoil/recoilSearch';
import { notificationAtom } from '../recoil/recoilNotification';

function SearchProducts() {
    const [state, setState] = useRecoilState(searchState);
    const setNotify = useSetRecoilState(notificationAtom);
    const [inputValue, setInputValue] = useState(state.query);

    useEffect(() => {
        const fetchResults = async () => {
            if (!inputValue.trim()) {
                setState({ query: '', results: [], loading: false });
                return;
            }

            setState(prev => ({ ...prev, loading: true, query: inputValue }));
            
            try {
                const response = await fetch(`https://dummyjson.com/products/search?q=${inputValue}`);
                const data = await response.json();
                setState({ query: inputValue, results: data.products, loading: false });
                
                if (data.products.length > 0) {
                    setNotify({ message: `Found ${data.products.length} products`, type: 'info', visible: true });
                }
            } catch (err) {
                setState(prev => ({ ...prev, loading: false }));
                setNotify({ message: 'Search error', type: 'error', visible: true });
            }
        };

        // Debounce logic
        const handler = setTimeout(() => {
            if (inputValue !== state.query) {
                fetchResults();
            }
        }, 800); // 0.8s debounce

        return () => clearTimeout(handler);
    }, [inputValue]);

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Search Products (B8: Debounce)</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type to search products..."
                style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '1.1rem',
                    borderRadius: '8px',
                    border: '2px solid #007bff',
                    marginBottom: '20px'
                }}
            />

            {state.loading && <p>Searching...</p>}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                {!state.loading && state.results.map(product => (
                    <div key={product.id} style={{ 
                        border: '1px solid #ddd', 
                        padding: '10px', 
                        borderRadius: '8px', 
                        background: '#fff',
                        display: 'flex',
                        gap: '15px',
                        alignItems: 'center'
                    }}>
                        <img src={product.thumbnail} alt={product.title} style={{ width: '60px', height: '60px', borderRadius: '5px' }} />
                        <div>
                            <h4 style={{ margin: 0 }}>{product.title}</h4>
                            <p style={{ margin: '5px 0', color: '#007bff' }}>${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            {!state.loading && inputValue && state.results.length === 0 && (
                <p style={{ textAlign: 'center', color: '#666' }}>No products found for "{inputValue}"</p>
            )}
        </div>
    );
}

export default SearchProducts;
