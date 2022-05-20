import React from 'react';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className={styles.container}>
            <Link to="/board/english"><p>토익</p></Link>
            <Link to="/board/job"><p>취업</p></Link>
            <Link to="/board/license"><p>자격증</p></Link>
        </div>
    );
};

export default Nav;