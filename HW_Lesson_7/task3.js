// Task3: записать в массив ряд фибоначчи начиная с N члена с длинной массива M

function generateFibonacci(N, M) {
    const fibonacciArray = [0, 1];
    for (let i = 2; i < N + M; i++) {
      const nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
      fibonacciArray.push(nextFibonacci);
    }
    return fibonacciArray.slice(N, N + M);
  }
  
  const N = 5;
  const M = 10;
  const fibonacciSequence = generateFibonacci(N, M);
  console.log(fibonacciSequence);
  