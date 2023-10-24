// 6. Дан массив [3, 4, 1, 2, 7. 30. 50]. Отсортируйте его.

function sortArray(arr) {
    arr.sort(function(a, b) {
    return a - b;
    });
    return arr;
  }
  
  // Проверка:
  const firstArray = [3, 4, 1, 2, 7, 30, 50];
  const sortedArray = sortArray(firstArray);
  console.log(sortedArray);