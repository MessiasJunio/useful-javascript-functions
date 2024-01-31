/**
 * It's used to ensure that time-consuming tasks do not fire so often.
 * 
 * Debouncing helps prevent unnecessary and potentially resource-intensive operations from being triggered too frequently.
 * 
 * Commom uses (such as a user typing in an input field, resizing a window or clicking buttona)
 * @param {function} callback
 * @param {number} delay
 * @param {boolean} immediate
 * @returns any
 */
function debounce(callback, delay, immediate = false) {
  let timerID;
  return function (...args) {
    clearTimeout(timerID);

    const shouldCallImmediately = timerID == null && immediate;
    if (shouldCallImmediately) {
      callback.apply(this, args);
    }

    timerID = setTimeout(() => {
      if (!immediate) {
        callback.apply(this, args);
      }

      timerID = null;
    }, delay);
  };
}
