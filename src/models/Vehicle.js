const VEHICLE_BIKE = "VEHICLE_BIKE";
const VEHICLE_CAR = "VEHICLE_CAR";

class Vehicle {
  constructor(type, licensePlate, model) {
    this.id = generateId("vh_");

    this.type = type;
    this.regNum = licensePlate;
    this.model = model;
  }
}
