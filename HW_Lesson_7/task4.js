//Task4: даны 2 4-х значных числа с неповторяющимися цифрами, 
//надо определить сколько цифр в этих числах совпадают по значению и позиции, 
//и сколько только по значению (3487 и 3794 ---> 1 и 2 )

function compareNumbers(number1, number2) {
    const strNumber1 = number1.toString();
    const strNumber2 = number2.toString();
    let positionAndValueMatch = 0;
    let valueMatch = 0;
  
    for (let i = 0; i < 4; i++) {
      if (strNumber1[i] === strNumber2[i]) {
        positionAndValueMatch++;
      } else if (strNumber1.includes(strNumber2[i])) {
        valueMatch++;
      }
    }
  
    return { positionAndValueMatch, valueMatch };
  }
  
  const number1 = 7689;
  const number2 = 5698;
  
  const { positionAndValueMatch, valueMatch } = compareNumbers(number1, number2);
  
  console.log(`По позиции и значению: ${positionAndValueMatch}`);
  console.log(`По значению: ${valueMatch}`);