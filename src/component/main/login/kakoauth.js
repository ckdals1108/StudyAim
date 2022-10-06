import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import qs from 'query-string';
import { useEffect } from 'react';
import { GetToken } from '../../../axios/kako/getToken';
import { GetInfo } from '../../../axios/kako/getInfo';

const Kakoauth = (props) => {
    const location  = useLocation();
    const query = qs.parse(location.search);
    const [accessToken,setAccessToken] = useState();
    const navigator = useNavigate();

    useEffect(() => {
        async function getAccessToken(){
            const data = await GetToken(query.code);
            if(data)
            {
                setAccessToken(data.access_token);
            }
            /*else
            {
                alert("잘못된 접근입니다.");
                navigator("/login");
            }*/
        }        
        getAccessToken();
    },[]);

    useEffect(() => {
        console.log("accessToken : " + accessToken);
        async function getInfo(){
            const data = await GetInfo(accessToken);            
        }
        if (accessToken !== undefined)
            getInfo();
    },[accessToken]);

    return (
            <div>
                {accessToken?<></>:<p>로그인중입니다.</p>}
            </div>
    );
};

export default Kakoauth;