class TravelAgency {
    constructor() {
      this.packages = [];
    }
  
    addTravelPackage(travelPackage) {
      this.packages.push(travelPackage);
    }
  
    displayAllPackages() {
      console.log('All Travel Packages:');
      this.packages.forEach((package) => {
        package.display();
        console.log('-------------------------');
      });
    }
  
    displayPackages(packages) {
      packages.forEach((package) => {
        package.display();
        console.log('-------------------------');
      });
    }
  
    sortPackages(criteria) {
      return [...this.packages].sort((a, b) => a[criteria] - b[criteria]);
    }
  
    filterPackages(filters) {
      return this.packages.filter((package) =>
        Object.entries(filters).every(([key, value]) => package[key] === value)
      );
    }
  }
  
  module.exports = TravelAgency;  