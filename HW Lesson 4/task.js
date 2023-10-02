const fs = require('fs-extra');

fs.mkdirSync('C:/Users/Liudmila_Akulovich/Git_Hometask3/HW Lesson 4/New folder');

fs.writeFileSync('C:/Users/Liudmila_Akulovich/Git_Hometask3/HW Lesson 4/New folder/MyFile.txt', 'JS Automation is so cool!');

fs.mkdirSync('C:/Users/Liudmila_Akulovich/Git_Hometask3/HW Lesson 4/New folder2');

fs.moveSync('C:/Users/Liudmila_Akulovich/Git_Hometask3/HW Lesson 4/New folder/MyFile.txt', 'C:/Users/Liudmila_Akulovich/Git_Hometask3/HW Lesson 4/New folder2/MyFile.txt');

fs.mkdirSync('C:/Users/Liudmila_Akulovich/Git_Hometask3/HW Lesson 4/New folder3');

fs.copySync('C:/Users/Liudmila_Akulovich/Git_Hometask3/HW Lesson 4/New folder2/MyFile.txt', 'C:/Users/Liudmila_Akulovich/Git_Hometask3/HW Lesson 4/New folder3/MyFile.txt');

fs.removeSync('C:/Users/Liudmila_Akulovich/Git_Hometask3/HW Lesson 4/New folder2/MyFile.txt');
fs.removeSync('C:/Users/Liudmila_Akulovich/Git_Hometask3/HW Lesson 4/New folder3/MyFile.txt');

