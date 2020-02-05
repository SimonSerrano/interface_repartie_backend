const {QUIZZ_TABLE_ROUTE, QUIZZ_TABLETTE_ROUTE} = require('./constants');

let router = require('express').Router();


router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to REST'
    });
});

var quizzTableController = require('./quizz-table/quizzTableController');
router.route(QUIZZ_TABLE_ROUTE)
	.post(quizzTableController.add)
  .get(quizzTableController.quizz);

router.route('/quizzTable/play')
  .post(quizzTableController.play);

router.route('/quizzTable/cheat')
	.post(quizzTableController.addQuizz);


var quizzTabletteController = require('./quizz-tablette/quizzTabletteController');
router.route('/quizzTablette/quizz')
	.get(quizzTabletteController.all)
  .post(quizzTabletteController.addQuizzTest);

router.route('/quizzTablette/cheat')
  .post(quizzTabletteController.addQuizz);
  


var timelineController = require('./quizz-table/timelineController');
router.route('/quizzTable/timeline')
  .get(timelineController.all);

router.route('/quizzTable/timeline/cheat')
  .post(timelineController.addTimeline);


module.exports = router;