const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const User = require('../../models/User')

// GET api/auth public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch(error) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});