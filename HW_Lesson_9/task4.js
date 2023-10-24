// 4. Напишите функцию, которая вставит данные в массив с заданного места в массиве. Дан массив [1, 2, 3, 4, 5]. 
// Сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

function insertDataIntoArray(arr, numbers, position) {
   arr.splice(position, 0, ...numbers);
   return arr;
  }
  
  // Проверяем:
  const originalArray = [1, 2, 3, 4, 5];
  const numbersToInsert = [8, 9, 15];
  const positionToInsert = 3;
  
  const newArray = insertDataIntoArray(originalArray, numbersToInsert, positionToInsert);
  console.log(newArray);
  
 