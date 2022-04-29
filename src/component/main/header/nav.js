import React from 'react';
import styles from './nav.module.css';
import { Outlet } from 'react-router-dom';

const Nav = () => {
    return (
        <div className={styles.container}>
            <p >수능</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>토익</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>자격증</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>학교시험</p>
        </div>
    );
};

export default Nav;