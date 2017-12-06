const queries = require('../db/queries');

module.exports = (app) => {
	app.get('/users', (req, res, next) => {
		queries.getAll()
		.then(users => {
			res.status(200).json({
				success: true,
				users
			})
		}).catch(error => {
			res.status(400).json({
				success: true,
				error
			})
		})
	})

	app.post('/users', (req, res, next) => {
		req.check('name', 'Name should not be empty').notEmpty();
		req.check('age', 'Age must be an number').isDecimal();
		req.check('gender', 'Gender should not be empty').notEmpty();
		req.check('number', 'Number must not be empty').notEmpty();
		req.check('email', 'Email is not valid').isEmail();

		var errors = req.validationErrors();
		if(errors) {
			res.status(400).json({
				success: false,
				errors: errors
			})
		} else {
			queries.createUser(req.body)
			.then(users => {
				res.status(200).json({
					success: true,
					users: users[0]
				})				
			})
		}
	})

}