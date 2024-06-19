//made this on 26 may 24
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    waterGoal: { type: Number, default: 0 },
    exerciseGoal: { type: Number, default: 0 },
    meditationGoal: { type: Number, default: 0 }
});

module.exports = mongoose.model('Profile', ProfileSchema);

//updated on 27 may 24

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const ProfileSchema = new Schema({
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     waterGoal: { type: Number, required: true },
//     exerciseGoal: { type: Number, required: true },
//     meditationGoal: { type: Number, required: true }
// });

// module.exports = mongoose.model('Profile', ProfileSchema);
