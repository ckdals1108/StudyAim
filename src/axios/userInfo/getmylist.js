import axios from 'axios';

export const getmylist = async(user) => {
    await axios.get(`/api/mypage/${userName}?menuType=${menuType}`,
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('user-token')}`
        }
    }).then((response) => {console.log(response.data)})
    .catch((response) => {console.log('Error!');})
};