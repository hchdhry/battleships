class Ship {
    constructor(length) {
      this.damage = 0;
      this.length = length;
      this.sunk = false;
    }
  
    hit(x) {
      this.damage += x;
      this.issunk();
    }
  
    issunk() {
      if (this.damage >= this.length) {
        this.sunk = true;
      }
    }
  }
  
  module.exports = Ship;
  