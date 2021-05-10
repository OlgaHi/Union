const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const User = require('../../models/User');
const Post = require('../../models/Post');
const { route } = require('./users');

// POST api/posts
router.post('/', [ auth, [
  body('text', 'Text is required')
  .not()
  .isEmpty()
]
], 
async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() })
}
  try {
    const user = await User.findById(req.user.id).select('-password');

    const newPost = new Post({
    text: req.body.text,
    name: user.name,
    avatar: user.avatar,
    user: req.user.id
  })
  
  const post = await newPost.save();

  res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
  
});

// GET all post api/posts
router.get('/', auth, async(req, res) => {
  try {
    const posts = await Post.find().sort({date: -1}) //sort by more resent
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

// GET api/posts/:id
router.get('/:id', auth, async(req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if(!post) {
      return res.status(404).json({ msg: 'Post not found'})
    }
    res.json(post);
  } catch (err) {
    console.error(err.message);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found'})  
    }
    res.status(500).send('Server Error')
  }
});



module.exports = router;