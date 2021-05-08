const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

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