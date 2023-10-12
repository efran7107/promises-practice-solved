/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the 'export' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
 */

const getPromise = (arg) => {
    if(Number.isInteger(arg)){
      return new Promise((res, rej) => {
        res(arg);
      });
    }else{
      return 0;
    }
  };

  const updateSumValue = () => {
    let sum = 2;
    const isProm = getPromise(120)
    .then(data => {
      data += sum;
      data += 8
      return data;
    })
    console.log(isProm);
    if(typeof(isProm) !== Promise){
      return 10
    }else{
      return sum
    }
  
  };

  const isVar = updateSumValue();
  console.log(isVar);