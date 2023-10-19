/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the 'export' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
 */

function onReject(errObj) {
    console.log(errObj.message);
}

const handlePromise = (promise) => {
    return promise
        .then((val) => {
            return val;
        })
        .catch((err) => {
            if (err.message) {
                return onReject(err.message);
            } else {
                return err;
            }
        });
};

handlePromise(
    new Promise((res, rej) => {
        null,
        rej();
    })
);