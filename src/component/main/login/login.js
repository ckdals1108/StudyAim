import React from 'react';
import styles from './login.module.css'
import { Form , Input , Checkbox , Button} from 'antd';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className={styles.login}>
            <Form className={styles.form}>
                <div>
                    <label htmlFor="user-id">아이디</label><br/>
                    <Input name="user-id"  />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label><br/>
                    <Input name="user-password" type="password"  />
                </div>
                <div style={{marginTop:10}}>
                    <Button type="primary" htmlType="submit" >로그인</Button>&nbsp;&nbsp;&nbsp;
                    <Link to="/member"><Button type="primary" htmlType="submit" >회원가입</Button></Link>
                </div>
            </Form>
        </div>
    );
};

export default Login;