import axios from 'axios';

function DoLogin(username, password){
    const data = {
        username: username,
        password: password
    };
    return axios.post('/api/login', data);
}

// export default DoLogin;
function addTwoNumbers(num1, num2){
    return num1 + num2;
}