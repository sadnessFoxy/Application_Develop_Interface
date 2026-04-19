import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { authAtom } from '../recoil/recoilAuth';
import { notificationAtom } from '../recoil/recoilNotification';

function Login() {
    const [auth, setAuth] = useRecoilState(authAtom);
    const setNotify = useSetRecoilState(notificationAtom);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('kminchelle'); // Default for dummyjson
    const [password, setPassword] = useState('0lelalR'); // Default for dummyjson

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Using dummyjson for real-ish login
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username,
                    password,
                    expiresInMins: 30,
                })
            });

            const data = await response.json();

            if (response.ok) {
                setAuth({
                    isAuthenticated: true,
                    user: { name: data.firstName + ' ' + data.lastName, email: data.email },
                    token: data.token
                });
                setNotify({ message: 'Login successful! Hello ' + data.firstName, type: 'success', visible: true });
            } else {
                throw new Error(data.message || 'Login failed');
            }
        } catch (err) {
            setNotify({ message: err.message, type: 'error', visible: true });
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        setAuth({ isAuthenticated: false, user: null, token: null });
        setNotify({ message: 'Logged out successfully', type: 'info', visible: true });
    };

    if (auth.isAuthenticated) {
        return (
            <div style={{ textAlign: 'center', padding: '40px', background: '#e9ecef', borderRadius: '15px' }}>
                <h2>Welcome Back, {auth.user.name}!</h2>
                <p>Status: Logged In ✅</p>
                <p>Email: {auth.user.email}</p>
                <div style={{ wordBreak: 'break-all', margin: '20px 0', fontSize: '0.8rem', color: '#666' }}>
                    <strong>Token:</strong> {auth.token}
                </div>
                <button 
                    onClick={handleLogout}
                    style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                    Logout
                </button>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '400px', margin: '40px auto', padding: '30px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ textAlign: 'center' }}>Login (B9: Auth + Token)</h2>
            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '15px' }}>
                    <label>Username (try 'kminchelle'):</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label>Password (try '0lelalR'):</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={loading}
                    style={{ 
                        width: '100%', 
                        padding: '12px', 
                        backgroundColor: '#28a745', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            <p style={{ fontSize: '0.8rem', marginTop: '15px', color: '#666' }}>
                * API: dummyjson.com/auth/login
            </p>
        </div>
    );
}

export default Login;