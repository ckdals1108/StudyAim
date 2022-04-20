import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <img style={styles.imagestyle} alt="logo" src="img/logo.png" />
            <div className={styles.mypage}>
                <img style={styles.user} alt="user" src="img/user.png"></img>로그인
            </div>
        </div>
    );
};

export default Header;