import React from 'react';
import Link from '@/components/Link';

export default () => {
    return (
        <div style={{background: '#fcc', padding: 50}}>
            <h3>Admin Homepage</h3>
            <p> Go to <Link href="/">App Homepage</Link></p>
        </div>
    );
}