import React from 'react';

import { Header } from './components/header';
import { Menu } from './components/menus';

function DefaultLayout({ children }) {
    return (
        <section className="default-layout">
            <Header />
            <Menu />
            {children}
        </section>
    );
}

export default DefaultLayout;
