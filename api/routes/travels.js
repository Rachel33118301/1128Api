const express = require('express');
const router = express.Router();

const {
   creatTravel,
   getAllTravels,
   getTravelById
} = require('../controllers/travelers');



router.get('/',getAllTravels);
router.post('/',creatTravel);
router.get('/getTravelById/:TravelId',getTravelById);




//router.get('/:TravelId',getSdarotLessonsById)

module.exports = router;