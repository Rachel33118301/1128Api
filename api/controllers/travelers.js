const mongoose = require('mongoose');
const Travel = require('../models/travels');

module.exports = {

  
getAllTravels: (req, res) => {
    Travel.find().then((travel) => {
        res.status(200).json({
            travel
        })
    }).catch(error => {
        res.status(500).json({
            error
        })
    });

},


    creatTravel: (req, res) => {
        const { img, name ,capitiy} = req.body;

        const travel = new Travel({
            _id: new mongoose.Types.ObjectId(),
            img,
            name,
            capitiy
        });

        travel.save().then(() => {
            res.status(200).json({
                message: 'Creaete travel'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })

        });
    },
    getTravelById: (req, res) => {
        const TravelId = req.params.TravelId
        Travel.findById(TravelId).then((travel) => {
            res.status(200).json({
                travel
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    
    }
}


