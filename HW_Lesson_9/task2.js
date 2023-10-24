// 2. Дано число n=1000 (может быть любое число). Делите его на 2 столько раз, пока результат деления не станет меньше 50 (может быть любое число). 
//Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), 
//и запишите его в переменную num.

function divideToLessThan50(n) {
    let num = 0;
  
    while (n >= 50) {
      n /= 2;
      num++;
    }
      return {
      result: n,
      numIterations: num,
    };
  }
  
  // Проверяем:
  const n = 1000;
  const result = divideToLessThan50(n);
  
  console.log("Результат:", result.result);
  console.log("Количество итераций:", result.numIterations);
  

  
  