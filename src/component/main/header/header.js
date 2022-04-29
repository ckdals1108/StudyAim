import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.container}>
            <Link to="/"><img style={styles.imagestyle} alt="logo" src="img/logo.png" /></Link>
            <div className={styles.mypage}>
            <img style={styles.user} alt="user" src="img/user.png"></img><Link to="/login">로그인</Link>
            </div>
        </div>
    );
};

export default Header;