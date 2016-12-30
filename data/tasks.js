
var faker = require('faker')


function Tasks() {
  var _self = this;

  var taskSchema = {
    "id": faker.random.uuid(),
    "name": faker.lorem.words(),
    "description": faker.lorem.sentence(),
    "done": faker.random.arrayElement([true, false]),
    "create_at": Date.now()
  }

  _self.only = function(update, id){
    var task = {"status": "OK"}
    task.data = taskSchema
    task.data.id = parseInt(id)

    if(update){
      task.data.name = faker.lorem.words() + ' update';
    }
    return task
  }

  _self.list = function(items, itemsPer){
    var tasks = {
      "status": "OK",
      "totalItems": items,
      "currentPage": 1,
      "itemsPerPage": itemsPer,
      "totalPages": Math.floor(items/itemsPer + 0.9)
    }

    tasks.data = []

    for (var id = 1; id < 9; id++) {
      tasks.data.push({
        "id": id,
        "name": faker.lorem.words(),
        "description": faker.lorem.sentence(),
        "done": faker.random.arrayElement([true, false]),
        "create_at": Date.now()
      })
    }

    return tasks
  }


}

module.exports = function() {
  return new Tasks()
}