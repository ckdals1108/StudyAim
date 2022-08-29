import React, { useEffect, useInsertionEffect } from 'react';
import styles from './study.module.css';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { OVGet } from '../../../axios/openvidu/get';

const Study = (props) => {
    const navigate = useNavigate();
    const { userId } = useSelector(state => ({
        userId:state.userId
    }));

    const [list,setList] = useState([{
        sessionModerator: "",
        sessionTitle: "",
        sessionId: "",
    }]);

    const onclick = (session, userName) => {
        if(localStorage.getItem('user-token') === null)
        {
            alert("로그인이 되어있지않습니다. 로그인해주세요.");
            navigate('/login');
        }
        else{
            navigate(`/webrtc?sessionId=${session}&userName=${userName}`);
        }
    }

    useEffect(() => {
        async function fetchData(){
           setList(
            await OVGet()
           );
        }
        fetchData();
    },[props])

    return (
        <div className={styles.center}>
                <div className={styles.box}>
                    스터디방
                    <br/>
                    {list && list.map(list => <div key={list.sessionId} className={styles.poproom}><p onClick={()=>onclick(list.sessionId, userId)}>
                        <img style={styles.imagestyle} alt="study" src="img/study.png" />
                        <p className={styles.name}>{list.sessionTitle}</p></p>
                    </div>)}
                </div>
                <div className={styles.button}>
                    <br/>
                    <Link to={`/board/ovwrite`}><button>글쓰기</button></Link>
                </div>
        </div>
    );
};

export default Study;