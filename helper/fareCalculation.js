const destinationFare = require('../helper/destinationFare');

var fareCalculations = {

    fixedFareBetweenCities(destinationName) {

        for (destDetails of destinationFare) {

            if (destDetails.cityName.toLowerCase() == destinationName.toLowerCase()) {
                return destDetails.fare
            }
        }
    },

    fareBasedOnPerKM(destinationName, perKmRate) {

        for (destDetails of destinationFare) {
            if (destDetails.cityName.toLowerCase() == destinationName.toLowerCase()) {
                return destDetails.distanceInKM * perKmRate;
            }
        }

    }
}

module.exports = fareCalculations;