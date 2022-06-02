import axios from 'axios';

export const editReply = async(replyId,replyContent) => { 
    await axios.put(`/api/posts/${replyId}`,
    {
        "postContent": replyContent
    },
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('user-token')}`
        }
    }).then((response) => {})
    .catch((response) => {console.log('Error!');})
};