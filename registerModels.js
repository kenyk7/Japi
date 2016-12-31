var jsonServer = require('json-server')

var generator = require('./Generator')()


var users = require('./models/users')
var comments = require('./models/comments')
var videos = require('./models/videos')


// Register models
var schema = [
	users,
	comments,
	videos
]

var numItems = 20;

var datasource = generator.genSchema(schema, numItems)


module.exports = function(){
	return datasource
}