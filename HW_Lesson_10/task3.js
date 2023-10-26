/*
Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
Используйте также функцию getNum, чобы вернуть промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. 
Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем будет дожидаться результата getNum, 
а затем найдет сумму полученных чисел и выводит на экран.
*/

function getNum(min, max) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        resolve(randomNum);
      }, 3000); 
    });
  }
  
 
  async function main() {
    try {
      const num1 = await getNum(1, 5);
      const num2 = await getNum(6, 10); 
      const sum = num1 + num2; 
      console.log("Сумма двух случайных чисел:", sum);
    } catch (error) {
      console.error("Произошла ошибка:", error);
    }
  }
  
  main();
  