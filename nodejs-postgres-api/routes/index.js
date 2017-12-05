const queries = require('../db/queries');

module.exports = (app) => {
	app.get('/users', async (req, res, next) => {
		var users = await queries.getAll()
		res.status(200).json({
			success: true,
			users
		})
	})

	app.post('/users', async (req, res, next) => {
		req.check('name', 'Name should not be empty').notEmpty();
		req.check('age', 'Age must be an number').isDecimal();
		req.check('gender', 'Gender should not be empty').notEmpty();
		req.check('number', 'Number must be an integer').isDecimal().isLength({ min: 10 });
		req.check('email', 'Email is not valid').isEmail();

		var errors = req.validationErrors();
		if(errors) {
			res.status(400).json({
				success: false,
				errors: errors
			})
		} else {
			var users = await queries.createUser(req.body);
			res.status(200).json({
				success: true,
				users: users[0]
			})
		}
	})

}