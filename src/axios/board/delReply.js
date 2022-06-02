import axios from 'axios';

export const delReply = async(replyId) => { 
    await axios.delete(`/api/replies/${replyId}`,
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('user-token')}`
        }
    }).then((response) => {})
    .catch((response) => {})
};