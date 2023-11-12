class TourPackageManager {
    constructor() {
      this.packages = [];
    }
  
    addPackage(tourPackage) {
      this.packages.push(tourPackage);
    }
  
    getAllPackages() {
      return this.packages;
    }
  
    getFilteredPackages(filter) {
      return this.packages.filter(filter);
    }
  
    sortPackages(comparator) {
      return this.packages.sort(comparator);
    }
  }
  
  module.exports = TourPackageManager;
  