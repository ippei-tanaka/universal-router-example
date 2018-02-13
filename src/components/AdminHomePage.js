import React from 'react';
import Link from '@/components/Link';

export default ({children}) => {
    return (
        <div>
            <h3>Admin Homepage</h3>
            <p> Go to <Link href="/">App Homepage</Link></p>
        </div>
    );
}