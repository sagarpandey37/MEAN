const express = require('express'),
    router = express.Router(),
    bookingController = require('../Controller/bookingController'),
    validatingCity = require('../helper/destinationFare')

router.post('/oneway', function (req, resp) {

    for (destDetails of validatingCity) {
        if (destDetails.cityName.toLowerCase() == req.body.destination.toLowerCase()) {
            bookingController.getDriverDetails(req, resp);
            break;
        } else {
            resp.status(200).send({
                "error_message": "Please enter a valid city"
            })
            break;
        }
    }

});


module.exports = router;