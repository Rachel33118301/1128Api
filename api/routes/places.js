const express = require('express');
const router = express.Router();

const {
    createPlace,
    getAllPlaces,
    deletPlaceById,
} = require('../controllers/places');

router.get('/',getAllPlaces);
router.post('/',createPlace);
router.delete('/:PlaceId',deletPlaceById);


module.exports = router;