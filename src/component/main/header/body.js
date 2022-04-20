import React from 'react';
import styles from './body.module.css'

const Body = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                왼쪽구역
            </div>
            <div className={styles.center}>
                <div>
                    TODO 하루 할일 리스트
                </div>
                <div>
                    인기 스터디방
                </div>
                <div>
                    관심 스터디방
                </div>
            </div>
            <div className={styles.right}>
                오른쪽구역
            </div>
        </div>
    );
};

export default Body;