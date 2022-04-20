import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <img style={styles.imagestyle} alt="logo" src="img/logo.png" />
            <div className={styles.mypage}>
                마이페이지 공간
            </div>
        </div>
    );
};

export default Header;