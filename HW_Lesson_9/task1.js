// 1. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
// Если это так - выведите 'да', в противном случае выведите 'нет'.

function checkSumEquality(numbersString) {
  
    const charArray =   numbersString.split('');
    
    const firstThreeChars = charArray.slice(0, 3);
    const lastThreeChars = charArray.slice(3, 6);
    
    const firstThreeNumbers = firstThreeChars.map(Number);
    const lastThreeNumbers = lastThreeChars.map(Number);
    
    const sumOfFirstThree = firstThreeNumbers.reduce((acc, num) => acc + num, 0);
    const sumOfLastThree = lastThreeNumbers.reduce((acc, num) => acc + num, 0);
    
    if (sumOfFirstThree === sumOfLastThree) {
      return 'да';
    } else {
      return 'нет';
    }
  }
  
  // Проверка:
  const numbersString = '123456';
  const result = checkSumEquality(numbersString);
  console.log(result);
  