
var faker = require('faker')

module.exports = function () {
  var users = []

  for (var id = 0; id < 7; id++) {

    users.push({
      "id": id,
      "first_name": faker.name.firstName(),
      "last_name": faker.name.firstName(),
      "phone": faker.phone.phoneNumber(),
      "photoUrl": faker.image.imageUrl()
    })

  }

  return users
}