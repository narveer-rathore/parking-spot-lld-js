class ParkingSpot {
  constructor(type) {
    this.id = generateId("ps_");
    this.type = type;
    this.vehicle = null;
  }

  get occupied() {
    return this.vehicle !== null;
  }

  park(vehicle) {
    if (this.occupied) return false;

    if (vehicle.type !== this.type) {
      console.warn("vehicle type mismatch");
      return false;
    }

    this.vehicle = vehicle;
    return true;
  }

  free() {
    this.vehicle = null;
  }

  static createSlots(type, capacities) {
    const res = [];
    for (let i = 0; i < capacities; i++) {
      res.push(new ParkingSpot(type));
    }
    return res;
  }

};
