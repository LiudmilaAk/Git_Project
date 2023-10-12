function splitNumber(number, parts) {
    if (parts <= 0 || number <= 0) {
      return [];
    }
  
    const result = [];
    let remaining = number;
  
    for (let i = 1; i < parts; i++) {
      const maxPart = remaining - (parts - i);
      const randomPart = Math.floor(Math.random() * (maxPart - 1)) + 1;
      result.push(randomPart);
      remaining -= randomPart;
    }
  
    result.push(remaining);
    return result;
  }
  
  const originalNumber = 15;
  const numberOfParts = 3;
  
  const randomNumbers = splitNumber(originalNumber, numberOfParts);
  console.log(randomNumbers);
  