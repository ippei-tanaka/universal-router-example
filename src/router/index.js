import React from 'react';
import UniversalRouter from 'universal-router';
import AppRootContainer from '@/containers/AppRootContainer';
import AdminRootContainer from '@/containers/AdminRootContainer';
import AppHomePage from '@/components/AppHomePage';
import AdminHomePage from '@/components/AdminHomePage';

const routes = [
    {
        path: '/',
        async action({next}) {
            const children = await next();
            return (
                <AppRootContainer>
                    {children}
                </AppRootContainer>
            );
        },
        children: [
            {
                path: '',
                async action() {
                    return (
                        <AppHomePage/>
                    );
                },
            },
            {
                path: '/admin',
                async action({next}) {
                    const children = await next();
                    return (
                        <AdminRootContainer>
                            {children}
                        </AdminRootContainer>
                    );
                },
                children: [
                    {
                        path: '',
                        async action() {
                            return (
                                <AdminHomePage/>
                            );
                        },
                    },
                ]
            },
        ],
    }
];

export const basename = '';

const router = new UniversalRouter(routes, {
    baseUrl: basename
});

export default router;