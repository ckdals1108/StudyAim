import axios from 'axios';

export const post = async(send) => { 
    console.log(send);
    await axios.post("/api/posts",
    {
        "userName":send.userName, 
        "postTitle": send.postTitle, 
        "postContent": send.postContent, 
        "postType":send.postType
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