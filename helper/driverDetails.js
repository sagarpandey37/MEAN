class Driverdetails {
    constructor(driverName, carNumber, carType, fare, language, origin, destination, departDate) {
        this.driverName = driverName;
        this.carNumber = carNumber;
        this.carType = carType;
        this.fare = fare;
        this.language = language;
        this.origin = origin;
        this.destination = destination;
        this.departDate = departDate;
    }
}

module.exports = Driverdetails;