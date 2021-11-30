const mongoose = require('mongoose');


const travelSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    img: {type: String ,require: true },
    name: {type: String ,require: true }
});

module.exports = mongoose.model('Travel', travelSchema);