//Task5: сортировка массива по возрастанию/убыванию

function sortArray(arr, order) {
    if (order === 'ascending') {
      arr.sort((a, b) => a - b);
    } else if (order === 'descending') {
          arr.sort((a, b) => b - a);
    } 
      return arr;
  }
  
  const numbers = [5, 2, 8, 1, 7, 15, 0, 4];
  
  // Сортировка по возрастанию:
  const ascendingSorted = sortArray(numbers.slice(), 'ascending');
  console.log('По возрастанию:', ascendingSorted);
  
  // Сортировка по убыванию:
  const descendingSorted = sortArray(numbers.slice(), 'descending');
  console.log('По убыванию:', descendingSorted);
  


  //Task6:  удалить из массива все повторяющиеся элементы

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  
  const exampleArray = [1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 8, 10];
  const noduplicatedArray = removeDuplicates(exampleArray);
  
  console.log(noduplicatedArray);