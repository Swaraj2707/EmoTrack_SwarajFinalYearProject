// //made this on 26 may 24

// const express = require('express');
// const router = express.Router();
// const Profile = require('../models/modelProfile');

// // Get user profile by email
// router.get('/user/:email', (req, res) => {
//     Profile.findOne({ email: req.params.email })
//         .then(profile => res.json(profile))
//         .catch(err => res.status(404).json({ success: false }));
// });

// // Create or update user profile
// router.post('/user', (req, res) => {
//     const { firstName, lastName, email, waterGoal, exerciseGoal, meditationGoal } = req.body;

//     Profile.findOne({ email: email }).then(profile => {
//         if (profile) {
//             // Update existing profile
//             profile.firstName = firstName;
//             profile.lastName = lastName;
//             profile.waterGoal = waterGoal;
//             profile.exerciseGoal = exerciseGoal;
//             profile.meditationGoal = meditationGoal;

//             profile.save().then(updatedProfile => res.json(updatedProfile));
//         } else {
//             // Create new profile
//             const newProfile = new Profile({
//                 firstName,
//                 lastName,
//                 email,
//                 waterGoal,
//                 exerciseGoal,
//                 meditationGoal
//             });

//             newProfile.save().then(profile => res.json(profile));
//         }
//     }).catch(err => res.status(500).json({ success: false, error: err.message }));
// });

// module.exports = router;


// Updated on 26 May 24

// const express = require('express');
// const router = express.Router();
// const Profile = require('../models/modelProfile');

// // Get user profile by email
// router.get('/user/:email', async (req, res) => {
//     try {
//         const profile = await Profile.findOne({ email: req.params.email });
//         if (!profile) {
//             return res.status(404).json({ success: false, error: 'Profile not found' });
//         }
//         res.json(profile);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ success: false, error: 'Server error' });
//     }
// });

// // Create or update user profile
// router.post('/user', async (req, res) => {
//     const { firstName, lastName, email, waterGoal, exerciseGoal, meditationGoal } = req.body;

//     try {
//         let profile = await Profile.findOne({ email });

//         if (profile) {
//             // Update existing profile
//             profile.firstName = firstName;
//             profile.lastName = lastName;
//             profile.waterGoal = waterGoal;
//             profile.exerciseGoal = exerciseGoal;
//             profile.meditationGoal = meditationGoal;

//             profile = await profile.save();
//             res.json(profile);
//         } else {
//             // Create new profile
//             profile = new Profile({
//                 firstName,
//                 lastName,
//                 email,
//                 waterGoal,
//                 exerciseGoal,
//                 meditationGoal
//             });

//             profile = await profile.save();
//             res.json(profile);
//         }
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ success: false, error: 'Server error' });
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Profile = require('../models/modelProfile');

// Get user profile by email
router.get('/user/:email', async (req, res) => {
    try {
        const profile = await Profile.findOne({ email: req.params.email });
        if (!profile) {
            return res.status(404).json({ success: false, error: 'Profile not found' });
        }
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

// Create or update user profile
router.post('/user', async (req, res) => {
    const { firstName, lastName, email, waterGoal, exerciseGoal, meditationGoal } = req.body;
    console.log('Received data:', req.body);

    try {
        let profile = await Profile.findOne({ email });

        if (profile) {
            // Update existing profile
            console.log('Updating existing profile');
            profile.firstName = firstName;
            profile.lastName = lastName;
            profile.waterGoal = waterGoal;
            profile.exerciseGoal = exerciseGoal;
            profile.meditationGoal = meditationGoal;

            profile = await profile.save();
            res.json(profile);
        } else {
            // Create new profile
            console.log('Creating new profile');
            profile = new Profile({
                firstName,
                lastName,
                email,
                waterGoal,
                exerciseGoal,
                meditationGoal
            });

            profile = await profile.save();
            res.json(profile);
        }
    } catch (err) {
        console.error('Error saving profile:', err.message);
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

module.exports = router;



