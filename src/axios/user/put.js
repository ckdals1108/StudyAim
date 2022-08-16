import axios from 'axios';

export default (user) => {
    let success = false;
    const host = process.env.REACT_APP_API_URL;
    console.log(host);
    axios.put(host + '/api/account/register',
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