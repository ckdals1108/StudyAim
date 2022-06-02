import axios from 'axios';

export const editPost = async(postId,ekind,list) => { 
    await axios.put(`/api/posts/${postId}`,
    {
        "postTitle":list.postTitle, 
        "postContent": list.postContent, 
        "postType":ekind
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