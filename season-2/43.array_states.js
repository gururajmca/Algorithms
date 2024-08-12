const arr = [
  {
    state: true
  },
  {
    state: false
  },
  {
    state: true
  }
];

let isRotationCompleted = true;
let isRotationStarted = false;
arr.forEach((item) => {
  if (item.state === false) {
      isRotationCompleted = false;
  } else {
      isRotationStarted = true;
  }
});
let colorState = 'red';
if (isRotationCompleted === true) {
    colorState = 'green';
} else if (isRotationStarted === true) {
    colorState = 'orange';
}

console.log('isRotationCompleted ', isRotationCompleted);
console.log('isRotationStarted ', isRotationStarted);
console.log('colorState ', colorState);
