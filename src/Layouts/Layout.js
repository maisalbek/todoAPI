import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <div style={{display: 'flex', minHeight: '100vh', flexDirection: 'column'}}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Layout;