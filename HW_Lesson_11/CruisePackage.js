const TravelPackage = require('./TravelPackage');

class CruisePackage extends TravelPackage {
  constructor(details) {
    super(details);
    this.cruiseType = details.cruiseType;
  }

  display() {
    super.display();
    console.log(`Cruise Type: ${this.cruiseType}`);
  }
}

module.exports = CruisePackage;