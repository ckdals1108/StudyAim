import React from 'react';
import styles from './mypage.module.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';

const MyList = () => {
    const { userId } = useSelector(state => ({
        userId:state.userId
    }));

    return (
        <div className={styles.container}>
            <h1>내가 쓴 글 / 답글</h1>
            <textarea className={styles.text_area} type='text' name="postTitle" placeholder='제목' value={userId} readOnly/>
        </div>
    );
};

export default MyList;