import React from 'react';
import Link from '@/components/Link';

export default () => {
    return (
        <div style={{background: '#a4bc85', padding: 50}}>
            <h3>App Homepage</h3>
            <p> Go to <Link href="/admin">Admin Homepage</Link></p>
        </div>
    );
}