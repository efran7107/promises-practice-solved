/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the 'export' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
 */


const usersUrl = 'http://localhost:3000/users/';

const getLoginList = (data) => { return data.map((i) => i.login); }
const getData = fetch(usersUrl)
    .then(res => { return console.log(res) });
const result = getData
    .then((data) => data.json())
    .then(data => {
        console.log(getLoginList(data));
        return getLoginList(data)
    });