import {React, useState} from 'react';
import styles from './board.module.css';
import { Link } from 'react-router-dom';
import { getType } from '../../../axios/board/getType';
import { useEffect } from 'react';

const Board = (props) => {
    const {kind, ekind} = props;
    const [list,setList] = useState([{}]);
    /*postContent: "test content 1"
    postId: 1
    postTitle: "test title 1"
    postType: "JOB"
    userId: 11*/
    
    useEffect(() => {
        async function fetchData(){
            setList(await getType(ekind));
        }
        fetchData();
    })

    return (
        <div className={styles.container}>
            <h1>{kind}</h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>제목</th>
                        <th>유저명</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(list => <tr key={list.postId}><td id="first">{list.postTitle}</td><td id="second">{list.userId}</td></tr>)}    
                </tbody> 
            </table>
            <br/><div className={styles.button}>
                <Link to={`/board/write/${ekind}`}><button>글쓰기</button></Link>
            </div>
        </div>
        
    );
};

export default Board;