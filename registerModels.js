var generator = require('./Generator')()
var helpers = require('./Helpers')()

var users = require('./cixpro/users')
var password_resets = require('./cixpro/password_resets')

var departaments = require('./cixpro/departaments')
var provinces = require('./cixpro/provinces')
var districts = require('./cixpro/districts')

var pExtends = require('./cixpro/property_extends')()
var properties = require('./cixpro/properties')


// Register models
var schema = [
	users,
	password_resets,
	departaments,
	provinces,
	districts,
	properties
]

var numItems = 20

var datasource = {}

// Register dinamics
datasource = generator.genSchema(schema, numItems)

// Register static models
datasource.transactions = pExtends.transactions()
datasource.types = pExtends.types()
datasource.statuses = pExtends.statuses()
datasource.levels = pExtends.levels()
datasource.moneys = pExtends.moneys()

module.exports = function(){
	return datasource
}