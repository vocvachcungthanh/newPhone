import React from 'react';

import { Header } from './components/header';

function DefaultLayout({ children }) {
    return (
        <section className="default-layout">
            <Header />
            {children}
        </section>
    );
}

export default DefaultLayout;
