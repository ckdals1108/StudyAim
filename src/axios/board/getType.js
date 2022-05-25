import axios from 'axios';

export const getType = async(ekind) => {
    let list = {};
    await axios.get(`/api/posts?postType=${ekind}`,
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('user-token')}`
        }
    }).then((response) => {list = response.data})
    .catch((response) => {console.log('Error!');})

    return (list['posts']);
};