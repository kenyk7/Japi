// Requires
var jsonServer = require('json-server')


// Routes
var routes = {}

// Register Routes
routes.users = require('./data/users')()
routes.todos = require('./data/todos')()
routes.videos = require('./data/videos')()


// Create server
var server = jsonServer.create()
var router = jsonServer.router(routes)
var middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)


// Generate token
var dataToken = {
	user: 'kenyk',
	token: 'kenyk7'
}
var error = {
	status:'Error',
	message: 'User not found'
}
// Login auth
server.use(jsonServer.bodyParser)
server.use('/login', function (req, res, next) {

	if (req.method === 'POST') {

		if(req.body.user === dataToken.user){
			res.jsonp(dataToken)
		}else{
			res.jsonp(error)
		}
	} else {
		res.sendStatus(401)
	}
})


// Authorize middleware
function isAuthorized(req){
	if(req.query.token === dataToken.token){
		return true
	}
	return false
}
server.use('/api', function (req, res, next) {
	if (isAuthorized(req)) {
		next()
	} else {
		res.sendStatus(401)
	}
})



// Use default router
var port = 3005
server.use('/api', router)
server.listen(port, function () {
  console.log('JSON Server is running in: http://localhost:'+port+'/api ' + ' + route: example /api/users')
})