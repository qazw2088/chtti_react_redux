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

function test_addTwoNumbers(){
    let result = addTwoNumbers(1, 2);
    if(result !== 3){
        throw new Error('Expected 1 + 2 to equal 3');
    }
}

function mergeTwoList(list1, list2){
    return [...list1, ...list2];
}

function test_mergeTwoList(){
    // comment out the following line to pass the test
    // throw new Error('Expected [1, 2, 3, 4]');

    let result = mergeTwoList([1, 2], [3, 4]);
    if(result.length !== 4){
        throw new Error('Expected [1, 2, 3, 4]');
    }
}