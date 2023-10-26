/*
Решить используя промисы и async/await. 
Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. 
Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.
*/


function delayedPromise(value) {
    const randomDelay = Math.floor(Math.random() * 5) + 1;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value);
      }, randomDelay * 1000);
    });
  }
  
  async function main() {
    const promises = [
      delayedPromise(1),
      delayedPromise(2),
      delayedPromise(3)
    ];
  
    try {
      const result = await Promise.race(promises);
      console.log("Первый завершившийся промис вернул значение:", result);
    } catch (error) {
      console.error("Произошла ошибка:", error);
    }
  }
  
  main();
  