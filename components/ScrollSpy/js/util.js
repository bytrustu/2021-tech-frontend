export const throttle = (func, delay) => {
  let throttled = false;
  return (...args) => {
    if (!throttled) {
      throttled = true;
      setTimeout(() => {
        func(...args);
        throttled = false;
      }, delay);
    }
  };
};

export const debounce = (func, delay) => {
  let timeoutId = null;
  console.log(`@@@@`, timeoutId);
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(null, ...args), delay);
  };
};