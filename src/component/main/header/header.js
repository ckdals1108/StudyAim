import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { offlogin } from '../../../redux/store';

const Header = () => {
    const { login } = useSelector(state => ({
        login:state.login
    }));
    const dispatch = useDispatch();
    const offLogin = () => dispatch(offlogin());
    const onclick = () => {
        localStorage.removeItem('user-token');
        offLogin();
    }

    return (
        <div className={styles.container}>
            <Link to="/"><img style={styles.imagestyle} alt="logo" src="img/logo.png" /></Link>
            <div className={styles.mypage}>
            {localStorage.getItem('user-token') !== null?
                <><img style={styles.user} alt="user" src="img/user.png"></img><Link to="/" onClick={onclick}>로그아웃</Link></>
                :<><Link to="/login">로그인</Link></>
            }
            </div>
        </div>
    );
};

export default Header;