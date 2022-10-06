import axios from 'axios';

export const GetInfo = async(ACCESS_TOKEN) => { 
    let data;
    const host = process.env.REACT_APP_API_URL;
    await axios.get(`${host}/api/auth/kakao/callback`,
    {
        "accessToken" : ACCESS_TOKEN
    },
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json'
        }
    }).then((response) => {console.log(response)})
    .catch((response) => {console.log(response)})
};