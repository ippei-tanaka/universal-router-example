import React from 'react';

export default ({isAuthorized, children}) => {

    if (!isAuthorized)
    {
        return (
            <div>
                <h2>Admin Root</h2>
                <div>Not Allowed to access the admin pages.</div>
            </div>
        );
    }

    return (
        <div>
            <h2>Admin Root</h2>
            <div>{children}</div>
        </div>
    );
}