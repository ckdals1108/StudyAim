import {React, useState} from 'react';
import styles from './board.module.css';
import { Link } from 'react-router-dom';

const Board = (props) => {
    const {kind, ekind} = props;
    const [list,setList] = useState([{
        'id':'1',
        'userName':'usertest1',
        'postTitle':'test1',
        'postContent':'testcontent1'
    }, {
        'id':'2',
        'userName':'usertest2',
        'postTitle':'test2',
        'postContent':'testcontent2'
    }]
    );
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
                    {list.map(list => <tr key={list.id}><td id="first">{list.postTitle}</td><td id="second">{list.userName}</td></tr>)}    
                </tbody> 
            </table>
            <br/><div className={styles.button}>
                <Link to={`/board/write/${ekind}`}><button>글쓰기</button></Link>
            </div>
        </div>
        
    );
};

export default Board;