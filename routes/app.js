var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* router.get('/', function (req, res, next) {
    res.render('node');
}); */

/* router.get('/message/:msg', function (req, res, next) {
    res.render('node', {message: req.params.msg});
});
 */

router.get('/', function (req, res, next) {
    User.findOne({}, function(err, doc) {
        if(err) {
            return res.send('Error!');
        }
        res.render('node', {email: doc.email});
    });
});


/* router.post('/message', function(req, res, next) {
    var message =  req.body.message;
    res.redirect('/message/' + message);
});
 */

router.post('/', function(req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Srivatsa',
        lastName: 'Shankaran',
        password: 'test',
        email: email
    });

    user.save();
    res.redirect('/');
})
module.exports = router;
