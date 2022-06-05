import axios from 'axios';

export const getUser = async(user) => {
    let success;
    await axios.post("process.env.REACT_APP_API_URL/api/auth/authenticate",
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