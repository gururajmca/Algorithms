function saveData() {
  console.log('Saved the data');
}

function debounce(func, time = 300) {
  let timer;
  return (...args) => {
    // clear the timer
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, time);
  }
}

const SaveBtnClicked = debounce(()=> saveData(), 500);

//<button onclick="SaveBtnClicked()"> Save  Data </button>

//initialize throttlePause variable outside throttle function
let throttlePause;
const throttle = (callback, time) => {
  //don't run the function if throttlePause is true
  if (throttlePause) return;
  //set throttlePause to true after the if condition. This allows the function to be run once
  throttlePause = true;

  //setTimeout runs the callback within the specified time
  setTimeout(() => {
    callback();

    //throttlePause is set to false once the function has been called, allowing the throttle function to loop
    throttlePause = false;
  }, time);
};
