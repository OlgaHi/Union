const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { body, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// GET api/profile/me private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id}).populate('user', ['name', 'avatar'])
    if(!profile) {
      return res.status(400).json({ msg: 'There are no profile for this user'})
    }
    res.json(profile)// if profile exist return profile
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/profile
router.post('/', [ auth, [
  body('address', 'Address is required')
  .not()
  .isEmpty(),
  body('phoneNumber', 'Phone number is required')
  .not()
  .isEmpty()
]
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { address, bio, phoneNumber } = req.body;
  
  //Build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if(address) profileFields.address = address;
  if(bio) profileFields.bio = bio;
  if(phoneNumber) profileFields.phoneNumber = phoneNumber;

  try {
    let profile = await Profile.findOne({ user: req.user.id });
    if(profile) {
      //Update
      profile = await Profile.findOneAndUpdate(
        {user: req.user.id},
        {$set: profileFields},
        {new: true}
      );

      return res.json(profile);
    }

    // Create
    profile = new Profile(profileFields);

    await profile.save();
    res.json(profile);

  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//GET all profiles api/profile public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar'])
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

//GET api/profile/user/:user_id
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({user: req.params.user_id}).populate('user', ['name', 'avatar'])

    if(!profile) return res.status(400).json({msg: 'Profile not found'})

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if(err.kind == 'ObjectId') {
      return res.status(400).json({msg: 'Profile not found'})
    }
    res.status(500).send('Server Error')
  }
});

module.exports = router;