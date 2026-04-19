import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { notificationAtom } from '../recoil/recoilNotification';

function Notification() {
    const [notif, setNotif] = useRecoilState(notificationAtom);

    useEffect(() => {
        if (notif.visible) {
            const timer = setTimeout(() => {
                setNotif(prev => ({ ...prev, visible: false }));
            }, 3000); // 3 seconds
            return () => clearTimeout(timer);
        }
    }, [notif.visible, setNotif]);

    if (!notif.visible) return null;

    const bgcolor = {
        success: '#4caf50',
        error: '#f44336',
        info: '#2196f3'
    }[notif.type] || '#333';

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: bgcolor,
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 9999,
            animation: 'fadeIn 0.3s ease-out',
            fontSize: '1rem',
            fontWeight: '500'
        }}>
            {notif.message}
        </div>
    );
}

export default Notification;
