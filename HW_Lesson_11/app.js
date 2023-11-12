const TravelAgency = require('./TravelAgency');
const TravelPackageFactory = require('./TravelPackageFactory');

const agency = new TravelAgency();

const packageFactory = new TravelPackageFactory();

const touristPackage = packageFactory.createTravelPackage('Tourist', {
  destination: 'Paris',
  duration: 5,
  transport: 'Bus',
  accommodation: 'Hotel',
  meals: 'Full Board',
  guide: 'John Doe',
});

const cruisePackage = packageFactory.createTravelPackage('Cruise', {
  destination: 'Caribbean',
  duration: 10,
  transport: 'Ship',
  accommodation: 'Cabin',
  meals: 'All Inclusive',
  cruiseType: 'Luxury',
});

const shoppingPackage = packageFactory.createTravelPackage('Shopping', {
  destination: 'New York',
  duration: 3,
  transport: 'Taxi',
  accommodation: 'Boutique Hotel',
  meals: 'Breakfast',
  shoppingGuide: 'Personal Shopper',
});

agency.addTravelPackage(touristPackage);
agency.addTravelPackage(cruisePackage);
agency.addTravelPackage(shoppingPackage);

agency.displayAllPackages();

const sortedPackages = agency.sortPackages('duration');
console.log('-------------------------');
console.log('Sorted Packages by Duration:');
agency.displayPackages(sortedPackages);

const filteredPackages = agency.filterPackages({
  transport: 'Bus',
  meals: 'Full Board',
});
console.log('-------------------------');
console.log('Filtered Packages:');
agency.displayPackages(filteredPackages);
