/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the 'export' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
 */

const attachTitle = (arg) => {
  return 'DR. ' + arg
};

const getPromise = () => {
  return new Promise((res) => {res('MANHATTAN')});
};

getPromise()
.then((res) => attachTitle(res))
.then((data) => console.log(data))