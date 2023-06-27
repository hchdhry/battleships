function createShip(length, health, sunk) {
    const ship = {
      length,
      health,
      sunk,
      hit: function(num) {
        this.health -= num;
      }
    };
  
    return ship;
  }
  
  module.exports = createShip;
  