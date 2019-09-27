const express = require('express'),
    router = express.Router(),
    bookingController = require('../Controller/bookingController'),
    validatingCity = require('../helper/destinationFare')

router.post('/oneway', function (req, resp) {

    let exist = true;
    for (destDetails of validatingCity) {
        if (destDetails.cityName.toLowerCase() == req.body.destination.toLowerCase()) {
            bookingController.getDriverDetailsForOne_Way(req, resp);
            exist = true;
            break;
        } 
    }
    if(!exist){
        resp.status(200).send({
            "error_message": "Please enter a valid city"
        })
    }

});


module.exports = router;