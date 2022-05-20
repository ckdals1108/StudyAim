import React from 'react';
import styles from './write.module.css'

const Wrtie = (props) => {
    const {kind} = props;
    return (
        <div className={styles.App}>
            <h1>{kind}</h1>
            <div className={styles.form_wrapper}>
            <input className={styles.title_input} type='text' placeholder='제목' />
            <textarea className={styles.text_area} placeholder='내용'></textarea>
            </div>
            <button className={styles.submit_button}>입력</button>
      </div>
    );
};

export default Wrtie;