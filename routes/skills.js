var express = require('express');
var router = express.Router();
//all paths starts with /todos

const skillsCtrl = require('../controllers/skills');
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

// Sample route to explore req params
// router.get('/:id', function(req, res) {
//         console.log(req.params)
//         res.send('check your console')
// })

module.exports = router;
