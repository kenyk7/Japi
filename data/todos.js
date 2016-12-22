
var faker = require('faker')


function Todos() {
  var _self = this;
  _self.list = function(){
    var todos = {
      "status": "success",
      "data": []
    }

    for (var id = 1; id < 9; id++) {
      todos.data.push({
        "id": id,
        "title": faker.lorem.words(),
        "description": faker.lorem.sentence(),
        "status": faker.random.arrayElement([true, false]),
        "create_at": Date.now()
      })
    }

    return todos
  }


}

module.exports = function() {
  return new Todos()
}