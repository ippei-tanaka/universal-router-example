import React from 'react';

export default ({children}) => {
    return (
        <div style={{background: '#eee', padding: 50}}>
            <h1>App Root</h1>
            <div>{children}</div>
        </div>
    );
}