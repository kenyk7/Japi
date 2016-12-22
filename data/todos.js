
var faker = require('faker')

module.exports = function () {
  var todos = []

  for (var id = 0; id < 7; id++) {

    todos.push({
      "id": id,
      "title": faker.lorem.words(),
      "description": faker.lorem.sentence(),
      "status": faker.random.arrayElement([true, false])
    })
  }

  return todos
}