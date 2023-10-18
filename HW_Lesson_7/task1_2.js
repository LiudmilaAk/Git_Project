//Task1: поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

function reverseArray(arr) {
    return arr.reverse();
  }
  
  let firstArray = [1, 2, 3, 4, 5, 6];
  let reversedArray = reverseArray(firstArray);
  console.log(reversedArray);

  let secondArray = [6, 5, 4, 3, 2, 1];
  let reversedArray2 = reverseArray(secondArray);
  console.log(reversedArray2); 
  

  //Task2: найти максимальное значение числа в массиве

  function findMaxNumberInArray(numbers) {
    return Math.max(...numbers);
  }
  
  const numberArray = [3, 45, 56, 23, 89, 103, 12, 15, 145];
  const maxNumber = findMaxNumberInArray(numberArray);
  
  console.log("Max number in the Array: " + maxNumber);