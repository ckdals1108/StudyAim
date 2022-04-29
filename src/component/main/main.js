import React from 'react';
import Home from '../main/home/home';
import { Route,Routes } from 'react-router-dom'
import Layout from '../layout/layout';
import Login from './login/login';
import Member from './member/member';


const Main = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/*" element={<Home/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/member" element={<Member/>}/>
            </Route>
        </Routes>
    );
};

export default Main;