import React from 'react';
import styles from './member.module.css'
import { Form , Input , Checkbox , Button} from 'antd';

const Member = () => {
    return (
        <div className={styles.member}>
            <Form >
                <div>
                    <label htmlFor="user-id">아이디</label><br/>
                    <Input name="user-id"  />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label><br/>
                    <Input name="user-nick"  />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label><br/>
                    <Input name="user-password" type="password"  />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label><br/>
                    <Input name="user-password-check" type="password"  />
                </div>
                <div>
                    <Checkbox name="user-term" >동의 합니까?</Checkbox>
                </div>
                <div style={{marginTop:10}}>
                    <Button type="primary" htmlType="submit" >가입하기</Button>
                </div>
            </Form>
        </div>
    );
};

export default Member;