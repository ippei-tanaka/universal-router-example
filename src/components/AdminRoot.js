import React from 'react';

export default ({isAuthorized, children}) => {
    return (
        <div style={{background: '#bca850', padding: 50}}>
            <h2>Admin Root</h2>
            {isAuthorized ? (
                <div>{children}</div>
            ) : (
                <div>Not Allowed to access the admin pages.</div>
            )}
        </div>
    );
}