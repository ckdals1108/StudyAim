import axios from 'axios';

export default (user) => {
    let success = false;
    axios.put(`${process.env.REACT_APP_API_URL}/api/account/register`,
    {
        "userName": user.name,
        "userPassword" : user.password,
        "userEnabled" : true
    },
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json'
        }
    }).then((response) => {console.log(response.data); success = true})
    .catch((response) => {console.log('Error!');});
    return success
};