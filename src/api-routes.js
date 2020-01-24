let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to REST'
    });
});

var quizzTableController = require('./quizz-table/quizzTableController');


router.route('/quizzTable/quizz')
	.post(quizzTableController.add)
	.get(quizzTableController.all);

module.exports = router;