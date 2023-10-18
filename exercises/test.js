/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the 'export' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
 */


const usersUrl = 'http://localhost:3000/users/';

const getLoginList = (data) => { return data.filter((i) => i.login !== undefined).map((i) => i.login); }

const getData = fetch(usersUrl);

const result = getData
    .then((res) => res.json())
    .then(data => {
        const arr = getLoginList((data));
        console.log(getLoginList(data));
        return arr
    });


console.log(result);