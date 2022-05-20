import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const post = async(user) => {
    let success;
    await axios.post("/api/auth/authenticate",
    {
        "username": user.name,
        "password" : user.password,
    },
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json'
        }
    }).then((response) => {localStorage.setItem('user-token', response.data.token);
    success = true;})
    .catch((response) => {console.log('Error!'); success = false;})
    return success;
};