import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userListAtom } from '../recoil/recoilUserList';
import { notificationAtom } from '../recoil/recoilNotification';

function UserList() {
    const [state, setState] = useRecoilState(userListAtom);
    const setNotify = useSetRecoilState(notificationAtom);

    const fetchUsers = async () => {
        setState(prev => ({ ...prev, loading: true, error: null }));
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) throw new Error('Failed to fetch users');
            const data = await response.json();
            setState({ data, loading: false, error: null });
            setNotify({ message: 'Users loaded successfully', type: 'success', visible: true });
        } catch (err) {
            setState({ data: [], loading: false, error: err.message });
            setNotify({ message: 'Error: ' + err.message, type: 'error', visible: true });
        }
    };

    useEffect(() => {
        if (state.data.length === 0) {
            fetchUsers();
        }
    }, []);

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Global User List (Bài 7)</h2>
            <button onClick={fetchUsers} disabled={state.loading} style={{ marginBottom: '20px' }}>
                {state.loading ? 'Refreshing...' : 'Refresh Users'}
            </button>

            {state.loading && <div className="spinner" style={{ margin: '20px' }}>Loading...</div>}
            
            {state.error && <p style={{ color: 'red' }}>Error: {state.error}</p>}

            {!state.loading && !state.error && (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {state.data.map(user => (
                        <li key={user.id} style={{ 
                            padding: '15px', 
                            border: '1px solid #ddd', 
                            marginBottom: '10px', 
                            borderRadius: '5px',
                            background: '#fff'
                        }}>
                            <strong>{user.name}</strong> - {user.email} <br/>
                            <small>{user.company.name}</small>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UserList;
