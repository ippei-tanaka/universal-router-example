import React from 'react';

export default ({children}) => {
    return (
        <div>
            <h1>App Root</h1>
            <div>{children}</div>
        </div>
    );
}