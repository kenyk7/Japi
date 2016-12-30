
var faker = require('faker')

// var videosData = require('./videos')()
// var Comments = require('./comments')()


function Users() {
  var _self = this;

  _self.list = function(items){
    var users = []

    for (var id = 1; id < items; id++) {
      users.push({
        "id": id,
        "role": faker.random.arrayElement(['admin', 'anonymus']),
        "name": faker.name.firstName(),
        "surname": faker.name.firstName(),
        "email": faker.internet.email(),
        "password": faker.internet.password(),
        "image": faker.image.avatar(),
        "create_at": Date.now()
      })
    }

    return users
  }


}

module.exports = function() {
  return new Users()
}