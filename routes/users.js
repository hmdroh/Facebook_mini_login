var express = require('express');
var router = express.Router();
var path = require("path");


router.use('/', function(req, res, next){
    if(!req.user){
        res.redirect('/');
    }
    next();
})

/* GET users listing. */
router.get('/', function(req, res) {
res.sendFile(path.join(__dirname, "../public/user.html"));
});

router.post('/', function(req, res) {
    res.json({name: req.user.displayName,
           image: req.user.image});
});
    

module.exports = router;
