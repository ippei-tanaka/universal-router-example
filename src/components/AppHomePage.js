import React from 'react';
import Link from '@/components/Link';

export default ({children}) => {
    return (
        <div>
            <h3>App Homepage</h3>
            <p> Go to <Link href="/admin">Admin Homepage</Link></p>
        </div>
    );
}