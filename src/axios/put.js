import axios from 'axios';

export default (user) => {
    axios.put("/api/account/register",
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
    }).then((response) => {console.log(response.data)})
    .catch((response) => {console.log('Error!')});
};