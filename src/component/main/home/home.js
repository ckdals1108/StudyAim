import React from 'react';
import styles from './home.module.css';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        console.log("home");
    })

    return (
        <div className={styles.center}>
                <div className={styles.box}>
                    할일 리스트
                    <div className={styles.list}>
                        <p>오늘 공부한 시간 / 오늘 목표한 시간</p>
                        <p>0시간 0분 / 10시간 30분</p>
                        <br/>
                        <p>오늘의 목표</p>
                        <p>프로그래밍 코딩하기</p>
                    </div>
                </div>
                <div className={styles.box}>
                    인기 스터디방
                    <br/>
                    <div className={styles.poproom}>
                    <p><img style={styles.imagestyle} alt="study" src="img/study.png" /></p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;둘만의 독서방</p>
                    </div>
                        
                    </div>
                <div className={styles.box}>
                    관심 스터디방
                    <br/>
                    <p><img style={styles.imagestyle} alt="study" src="img/study.png" /></p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;둘만의 독서방</p>
                </div>
        </div>
    );
};

export default Home;