var express = require('express');
var router = express.Router();

//onboarding pages
router.get('/', function(req, res, next){ res.render('onboarding/home'); })

router.get('/team', function(req, res, next){ res.render('static/team'); })

// always at the end
	module.exports = router;