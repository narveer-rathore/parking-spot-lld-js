class ParkingFloor {
  constructor(number, capacities) {
    this.id = generateId("pf_");

    this.number = number;
    this.parkingSpots = {}; // { vehicleType: [] }

    this.capacities = capacities;

    Object.keys(capacities).forEach(type => {
      this.parkingSpots[type] = ParkingSpot.createSlots(type, capacities[type]);
    });
  }

  status() {
    return this.parkingSpots;
  }

  getEmptySpot(type) {
    for (const spot of this.parkingSpots[type]) {
      if (!spot.occupied) {
        return spot;
      }
    }
  }

  free(type, spotId) {
    console.log(this.parkingSpots, type);
    for (const spot of this.parkingSpots[type]) {
      if (spot.id === spotId) {
        spot.free();
        return Date.now();
      }
    }
  }
}
