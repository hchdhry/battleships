class Ship {
    constructor(damage, length, sunk) {
      this.damage = 0;
      this.length = length;
      this.sunk = sunk;
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
  