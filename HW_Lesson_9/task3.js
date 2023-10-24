// 3. Дан массив arr. Найдите среднее арифметическое его элементов. 
// Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

function findAverage(arr) {

const sum = arr.reduce((acc, num) => acc + num, 0);
const average = sum / arr.length;
    return average;
  }
  
  // Проверяем:
  const arr = [12, 15, 20, 25, 59, 79];
  const average = findAverage(arr);
  console.log("Среднее арифметическое:", average);