const { Router } = require("express");
const router = new Router();
const Event = require("./Event");

//POST method to create new events
router.post("/event", (req, res) => {
	Event.create({
		name: req.body.name,
		date: req.body.date,
		description: req.body.description
	})
		.then(event => res.json(event))
		.catch(err => next(err));
});

//GET method to fetch all events
router.get("/event", (req, res) => {
	Event.findAll()
		.then(event => res.json(event))
		.catch(err => next(err));
});

//PUT method to update an event
router.put("/event/:eventId", (req, res, next) => {
	Event.findByPk(parseInt(req.params.eventId))
		.then(event => event.update(req.body))
		.then(event => res.send(event))
		.catch(next);
});

//DELETE method to delete an event
router.delete("/event/:eventId", (req, res, next) => {
	Event.destroy({
		where: {
			id: parseInt(req.params.eventId)
		}
	})
		.then(number => res.send({ number }))
		.catch(next);
});

//GET method to fetch a single event
router.get("/event/:eventId", (req, res, next) => {
	Event.findByPk(parseInt(req.params.eventId))
		.then(event => res.send({ event }))
		.catch(next);
});

module.exports = router;
