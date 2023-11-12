class TravelPackage {
    constructor(details) {
      this.destination = details.destination;
      this.duration = details.duration;
      this.transport = details.transport;
      this.accommodation = details.accommodation;
      this.meals = details.meals;
    }
  
    display() {
      console.log(`Destination: ${this.destination}`);
      console.log(`Duration: ${this.duration} days`);
      console.log(`Transport: ${this.transport}`);
      console.log(`Accommodation: ${this.accommodation}`);
      console.log(`Meals: ${this.meals}`);
    }
  }
  
  module.exports = TravelPackage;
  