const express = require('express');
const app = express();
const port = process.env.PORT || 3030;
const routes = require('./routes');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const cors = require('./helpers/cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(validator());
app.use(cors);

routes(app);

app.use(function(err, req, res, next) {
	res.status(400).json({
		success: false,
		error: err.message
	})
})

app.listen(port, () => {
	console.log('Running on '+port)
})