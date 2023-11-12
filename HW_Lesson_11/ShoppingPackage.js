const TravelPackage = require('./TravelPackage');

class ShoppingPackage extends TravelPackage {
  constructor(details) {
    super(details);
    this.shoppingGuide = details.shoppingGuide;
  }

  display() {
    super.display();
    console.log(`Shopping Guide: ${this.shoppingGuide}`);
  }
}

module.exports = ShoppingPackage;
