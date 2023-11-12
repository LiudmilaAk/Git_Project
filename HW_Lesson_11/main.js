const TourPackage = require('./tourPackage');
const TourPackageBuilder = require('./tourPackageBuilder');
const TourPackageManager = require('./tourPackageManager');

//Buildrer для создания новой путевки
const newTourPackage = new TourPackageBuilder('Cruise')
  .setTransport('Ship')
  .setMeals('Full Board')
  .setDuration(14)
  .build();

//Singleton для управления предложениями
const tourPackageManager = new TourPackageManager();
tourPackageManager.addPackage(newTourPackage);

// Вывод всех путевок в консоль
console.log('All Packages:', tourPackageManager.getAllPackages());

// Фильтрация:
const filteredPackages = tourPackageManager.getFilteredPackages(
  package => package.transport === 'Ship' && package.duration >= 7
);
console.log('Filtered Packages:', filteredPackages);

// Сортировка:
const sortedPackages = tourPackageManager.sortPackages((a, b) => a.duration - b.duration);
console.log('Sorted Packages:', sortedPackages);
