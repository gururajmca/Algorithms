const apiA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success From A');
  }, 1000);
});

const apiB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success From B');
  }, 2000);
});

const apiC = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success From C');
  }, 3000);
});

const apiD = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success From D');
  }, 4000);
});

const apiE = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success From E');
  }, 5000);
});

const myPromises = [apiA, apiB];

const independentAPIRespone = Promise.all(myPromises);
console.log('Start----------', new Date().getSeconds());
console.log('Call apiA and apiB');
independentAPIRespone.then((res) => {
  console.log('API Response', res);
  console.log('End of A and B API\'s ---------', new Date().getSeconds());
  const dependentAPIRespone = Promise.all([apiC, apiD, apiE]);
  dependentAPIRespone.then((r)=> {
    console.log('End of C, D and E API\'s ----------', new Date().getSeconds());
  }).catch((e) => {
    console.log('Error ', e);
  })
}).catch((e)=> {
  console.log('Error', e);
})


// Some examples of higer order functions, The functions that can accept other functions as an argument is called as higer order function.

const inputArray = [1,2,3,4,5,6];
const doubledArray = inputArray.map((item) => item * 2);
console.log('The Doubled array is ', doubledArray);
