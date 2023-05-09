import React from 'react';

export default function App() {
    return (
        <>
            <h1>I am App component!</h1>
            <button onClick={() => {
                electron.notificationApi.sendNotification('My custom notification');
            }}>Notify Me</button>
        </>
    );
}