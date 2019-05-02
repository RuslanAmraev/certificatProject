const express = require('express');
const router = express.Router();

// router.use('/api/category', require('./category.js'));
// router.use('/api/mark', require('./mark.js'));
// router.use('/api/model', require('./model.js'));
router.use('/api/post', require('./post.js'));
router.use('/api/user', require('./user.js'));

module.exports = router;