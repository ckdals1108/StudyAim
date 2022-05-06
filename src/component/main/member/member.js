import React, { useRef, useState, useEffect } from 'react';
import styles from './member.module.css'
import { Form , Input , Checkbox , Button} from 'antd';

const Member = () => {
    const [id,setId] = useState();
    const [nickname,setNickname] = useState();
    const idRef = useRef(null);
    const nicknameRef = useRef(null);
    const passwordRef = useRef(null);
    const repasswordRef = useRef(null);

    const test = (e) => {
        e.preventDefault();
        setId(idRef.current.value);
        setNickname(nicknameRef.current.value);
        console.log(id);
    }

    useEffect(()=>{
        console.log(id);
    },[id]);

    return (
        <div className={styles.member}>
            <Form>
                <div>
                    <label htmlFor="user-id">아이디</label><br/>
                    <Input type="text" name="user-id" ref={idRef} />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label><br/>
                    <Input type="text" name="user-nick" ref={nicknameRef} />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label><br/>
                    <Input name="user-password" type="password" ref={passwordRef} />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label><br/>
                    <Input name="user-password-check" type="password" ref={repasswordRef} />
                </div>
                <div>
                    <Checkbox name="user-term" >동의 합니까?</Checkbox>
                </div>
                <div style={{marginTop:10}}>
                    <Button onClick={test}>가입하기</Button>
                </div>
            </Form>
        </div>
    );
};

export default Member;