const mongoose = require('mongoose');


const placeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String ,require: true },
    img:{type: String ,require: true },
    date: {type: String ,require: true },
    TravelId:[{type: mongoose.Schema.Types.ObjectId, ref:"Travel",require: true}]

});

module.exports = mongoose.model('Place', placeSchema)

/**videos      : [{type:mongoose.Schema.Types.ObjectId,ref: 'Video'}],
 */