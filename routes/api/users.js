const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

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
  (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
  } 

  res.send('User route')
  }
);






module.exports = router;