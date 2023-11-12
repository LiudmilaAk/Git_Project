const TourPackage = require('./tourPackage');

class TourPackageBuilder {
  constructor(type) {
    this.tourPackage = new TourPackage(type, 'DefaultTransport', 'DefaultMeals', 0);
  }

  setTransport(transport) {
    this.tourPackage.transport = transport;
    return this;
  }

  setMeals(meals) {
    this.tourPackage.meals = meals;
    return this;
  }

  setDuration(duration) {
    this.tourPackage.duration = duration;
    return this;
  }

  build() {
    return this.tourPackage;
  }
}

module.exports = TourPackageBuilder;
