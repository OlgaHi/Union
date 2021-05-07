const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const gravatar = require('gravatar');

const User = require('../../models/User');

// POST api/users public
router.post('/', [
  body('name', 'Name is required') 
    .not()
    .isEmpty(),
  body('email', 'Please include valide email')
    .isEmail(),
  body('password', 'Please enter a password with 6 or more characters')
    .isLength({ min: 6 })
],
async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  } //send back error message
  
  const { name, email, password } = req.body;

  try {
  // See if user exists by email
  let user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({ errors: [{ msg: 'User already exists'}] });
  }

  const avatar = gravatar.url(email, {
    s: '200',
    r: 'pg',
    d: 'mm'
  })
  
  user = new User({
    name,
    email,
    avatar,
    password  
  })
  res.send('User route')
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }    
}
);





module.exports = router;