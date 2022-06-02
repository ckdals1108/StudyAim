import axios from 'axios';

export const delPost = async(postId) => { 
    await axios.delete(`/api/posts/${postId}`,
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('user-token')}`
        }
    }).then((response) => {})
    .catch((response) => {})
};