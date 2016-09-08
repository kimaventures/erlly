var express = require('express');
var router = express.Router();



	router.get('/', function(req, res, next){
		res.render('onboarding/home');
	})


// always at the end
	module.exports = router;