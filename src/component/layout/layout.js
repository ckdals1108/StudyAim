import React from 'react';
import { Outlet } from 'react-router-dom';
import Body from '../main/header/body';
import Header from '../main/header/header';
import Nav from '../main/header/nav';

const Layout = () => {
    return (
        <>
            <Header/>
            <Nav/>
            <Body/>
        </>
    );
};

export default Layout;