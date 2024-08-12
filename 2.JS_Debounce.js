function debounce(fn, delay) {
  let timeoutId;
  return(...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(()=> {
      fn.apply(this, args)
    }, delay);
  };
}

const debouncedFunction = debounce(()=> {
  console.log('Debounced!');
}, 500);
