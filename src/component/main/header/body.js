import React, { useState } from 'react';
import styles from './body.module.css'
import { Link, Route, Routes, Outlet } from 'react-router-dom'
import Login from '../login/login';
import Home from '../home/home';
import Member from '../member/member';

const Body = () => {
    const [home, setHome] = useState(true);
    return (
            <div className={styles.container}>
                <div className={styles.side}>
                </div>           
                <Outlet/>  
                <div className={styles.side}>
                </div>
            </div>
            
    );
};

export default Body;