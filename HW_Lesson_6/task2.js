const startDate = new Date('2000-01-01');

const currentDate = new Date();

let friday13Count = 0;

while (startDate <= currentDate) {

  if (startDate.getDay() === 5) {
     if (startDate.getDate() === 13) {
      friday13Count++;
    }
  }

  startDate.setDate(startDate.getDate() + 1);
}

console.log('Количество пятниц 13-ого с 01/01/2000 до сегодня:', friday13Count);
