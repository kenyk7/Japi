var generator = require('./Generator')()
var helpers = require('./Helpers')()

var users = require('./cixpro/users')
var password_resets = require('./cixpro/password_resets')

var departaments = require('./cixpro/departaments')
var provinces = require('./cixpro/provinces')
var districts = require('./cixpro/districts')

var pExtends = require('./cixpro/property_extends')()

var properties = require('./cixpro/properties')
var property_images = require('./cixpro/property_images')
var property_proyects = require('./cixpro/property_projects')
var property_likes = require('./cixpro/property_likes')

var newsletters = require('./cixpro/newsletters')


// Register models
var schema = [
	users,
	password_resets,
	departaments,
	provinces,
	districts,
	properties,
	property_images,
	property_proyects,
	property_likes,
	newsletters
]

var numItems = 20

var datasource = {}

// Register dinamics
datasource = generator.genSchema(schema, numItems)

// Register static models
datasource.property_transactions = pExtends.transactions()
datasource.property_types = pExtends.types()
datasource.property_moneys = pExtends.moneys()
datasource.property_levels = pExtends.levels()
datasource.property_statuses = pExtends.statuses()


module.exports = function(){
	return datasource
}