const _ = require('lodash');
const express = require('express');
const app = express();
const repeative = require('./repeatative');
var bodyParser = require("body-parser");

app.listen(3000,() => {
	console.log("running on 3000");
});

app.use(bodyParser.urlencoded({ extended: true }));  // Middleware Code

var task = [];


app.set('view engine', 'ejs');

app.get('/', function(req , res) {
	res.render('index', {task: task} );
});

app.post('/addtask', function (req,res) {

	var newTask = req.body.newtask; // Body Parser Middleware fetches the value of input Field.

	task.push(newTask);
	res.redirect('/');
});

app.post('/removetask', function(req,r) { // Users may select multiple checkbox to delete items. 

	var deleteTask= req.body.check; // Body Parser Middleware fetches the value of all checked checkbox.

	if (typeof deleteTask == 'string') { // if only one checkbox is selected.

		task = repeative.filterOut(task, deleteTask); // Repeated Code
	}
	else { // if multiple checkboxes are selected.

	  _.map( deleteTask, (deleteName) => { // iterate over selected checkbox values

	  	task = repeative.filterOut(task, deleteName); // Repeated Code
	  });	
	}
	r.redirect('/');
});

