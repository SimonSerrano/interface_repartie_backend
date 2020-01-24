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



var quizzTabletteController = require('./quizz-tablette/quizzTabletteController');
router.route('/quizzTablette/quizz')
	.get(quizzTabletteController.all);
router.route('/quizzTablette/cheat')
	.post(quizzTabletteController.addQuizz);


module.exports = router;