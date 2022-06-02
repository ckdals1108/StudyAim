import React from 'react';
import Home from '../main/home/home';
import { Route,Routes } from 'react-router-dom'
import Layout from '../layout/layout';
import Login from './login/login';
import Member from './member/member';
import Board from './board/board';
import Write from './board/wrtie';
import GetList from './board/getlist';
import Mypage from './userInfo/mypage';
import EditPage from './userInfo/editpage';
import MyList from './userInfo/mylist';



const Main = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route exact={true} path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/member" element={<Member/>}/>
                <Route path="/mypage/info" element={<Mypage/>}/>
                <Route path="/mypage/edit" element={<EditPage/>}/>
                <Route path="/mypage/myList" element={<MyList/>}/>
                <Route path="/board/english" element={<Board kind="토익" ekind="ENGLISH" />}/>
                <Route path="/board/job" element={<Board kind="취업" ekind="JOB"/>}/>
                <Route path="/board/license" element={<Board kind="자격증" ekind="LICENSE"/>}/>
                <Route path="/board/write/english" element={<Write kind="토익" ekind="ENGLISH"/>}/>
                <Route path="/board/write/job" element={<Write kind="취업" ekind="JOB"/>}/>
                <Route path="/board/write/license" element={<Write kind="자격증" ekind="LICENSE"/>}/>
                <Route path="/board/list" element={<GetList />} />
            </Route>
        </Routes>
    );
};

export default Main;