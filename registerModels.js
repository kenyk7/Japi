var jsonServer = require('json-server')

var generator = require('./Generator')()


var users = require('./models/users')
var videos = require('./models/videos')
var comments = require('./models/comments')


// Register models
var schema = [
	users,
	videos,
	comments
]

var numItems = 20;

var datasource = generator.genSchema(schema, numItems)


module.exports = function(){
	return datasource
}