import React from 'react';
import axios from 'axios';

const Axios = () => {
    //axios.get("http://localhost:8080/api/users");
    const userPost = () => axios.put("/api/account/register",
    {
        userName: 'test1',
        userPassword : '1234',
        userEnabled : 'true'
    },
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json'
        }
    }).then((response) => {console.log(response.data)})
    .catch((response) => {console.log('Error!')});
    return (
        <>
            <button onClick={userPost}>
  Activate Lasers
</button>
        </>
    );
};

export default Axios;