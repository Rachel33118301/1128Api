const mongoose = require('mongoose');
const Travel=require('../models/travels');
const Place=require('../models/places')

module.exports = {

    createPlace: (req, res) => {
/**title: {type: String ,require: true },
    date: {type: String ,require: true },
    TravelId:[{type: mongoose.Schema.Types.ObjectId, ref:"Travel",require: true}] */
        const { title,img, date,  TravelId } = req.body;
        debugger;
        console.log(TravelId);
        Travel.findById(TravelId).then((travel) => {
            if (!travel) {
                return res.status(400).json({
                    message: 'Travel not found'
                })
            }
        })

        const place = new Place({
            _id: new mongoose.Types.ObjectId(),
            title,img, date,  TravelId
        });

        place.save().then(() => {
            res.status(200).json({
                message: 'Place created'
            })

        })
            .catch(error => {
                res.status(500).json({
                    error
                })
            });
    },
    getAllPlaces: (req, res) => {
        Place.find().then((places) => {
            res.status(200).json({
                places
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },
   
    
    deletPlaceById: (req, res) => {
        const placeId = req.params.PlaceId

        Place.remove({ _id: placeId }).then(() => {
            res.status(200).json({
                massege: `place - ${placeId} deleted`
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        })
    }
}