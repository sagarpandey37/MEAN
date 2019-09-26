const fareCalculation = require('../helper/fareCalculation'),
    driverDetails = require('../helper/driverDetails');

var bookingOperations = {

    getDriverDetails(req, resp) {
        let origin = req.body.origin,
            destination = req.body.destination,
            departDate = req.body.departDate,
            listOfDrivers = [];

        let fare_1 = fareCalculation.fixedFareBetweenCities(destination),
            driver_1 = new driverDetails('driver1', 'MH-00-00-0000', 'Maruti Swift', fare_1, 'English', origin, departDate);
        listOfDrivers.push(driver_1);

        let fare_2 = fareCalculation.fareBasedOnPerKM(destination, 15),
            driver_2 = new driverDetails('driver2', 'MH-00-00-0000', 'Maruti Swift', fare_2, 'Hindi', origin, departDate);
        listOfDrivers.push(driver_2);

        let fare_3 = fareCalculation.fareBasedOnPerKM(destination, 18),
            driver_3 = new driverDetails('driver3', 'MH-00-00-0000', 'Maruti Swift', fare_3, 'Kannada', origin, departDate);
        listOfDrivers.push(driver_3);

        resp.status(200).send(listOfDrivers);
    }

}

module.exports = bookingOperations;