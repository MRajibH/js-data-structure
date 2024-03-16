#Question:  Give a number 'n', find the first 'n'elements of the fibnacci sequence
#Combining the initialization and loop iterations, the overall time complexity of the Fibonacci function is O(n).


function fibbonacci(n) {
  const fib = [0, 1];
  var tmp = [];
  if (n == 0) {
    return tmp;
  }
  if (n == 1) {
    tmp = tmp[0];
    return fib;
  }
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibbonacci(5));
console.log(fibbonacci(0));
