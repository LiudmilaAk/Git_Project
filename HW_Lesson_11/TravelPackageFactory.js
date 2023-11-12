const TouristPackage = require('./TouristPackage');
const CruisePackage = require('./CruisePackage');
const ShoppingPackage = require('./ShoppingPackage');

class TravelPackageFactory {
  createTravelPackage(type, details) {
    switch (type) {
      case 'Tourist':
        return new TouristPackage(details);
      case 'Cruise':
        return new CruisePackage(details);
      case 'Shopping':
        return new ShoppingPackage(details);
      default:
        throw new Error('Invalid package type.');
    }
  }
}

module.exports = TravelPackageFactory;
