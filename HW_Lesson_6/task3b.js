function splitNumberWithDecimals(number, parts) {
    if (parts <= 0 || number <= 0) {
      return [];
    }
  
    const result = [];
    let remaining = number;
  
    for (let i = 1; i < parts; i++) {
      const maxPart = remaining - (parts - i);
      const randomPart = Math.random() * (maxPart - 0.01) + 0.01;
      const roundedPart = parseFloat(randomPart.toFixed(2));
      result.push(roundedPart);
      remaining -= roundedPart;
    }
  
    result.push(parseFloat(remaining.toFixed(2)));
    return result;
  }
  
  const originalNumber = 15;
  const numberOfParts = 3;
  
  const randomNumbers = splitNumberWithDecimals(originalNumber, numberOfParts);
  console.log(randomNumbers);
  