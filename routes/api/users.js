const express = require('express');
const router = express.Router();

// GET api/users public
router.get('/', (req, res) => res.send('User route'));

module.exports = router;