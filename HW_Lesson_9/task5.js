  // 5. Напишите функцию, которая вставит данные в массив в заданные несколько мест в массиве. 
  // Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

  function insertNumAtPositions(arr, data, positions) {
    for (let i = 0; i < data.length; i++) {
      arr.splice(positions[i], 0, data[i]);
    }
      return arr;
  }
  
  // Проверка:
  const originalArray = [1, 2, 3, 4, 5];
  const dataToInsert = [100, 200, 300, 400];
  const positionsToInsert = [1, 2, 6, 8];
  
  const newArray = insertNumAtPositions(originalArray, dataToInsert, positionsToInsert);
  console.log(newArray);
  