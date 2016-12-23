
// Model Class for automate generator models with schemma

var faker = require('faker')

var entities = [
  {
    'entity': 'users',
    'items': 10,
    'fields': [
      {"name": "role", "fake": faker.random.arrayElement(['admin', 'anonymus'])},
      {"name": "name", "fake": faker.name.firstName()},
      {"name": "surname", "fake": faker.name.firstName()},
      {"name": "email", "fake": faker.internet.email()},
      {"name": "password", "fake": faker.internet.password()},
      {"name": "image", "fake": faker.image.avatar()},
      {"name": "create_at", "fake": Date.now()}
    ]
  },
  {
    'entity': 'videos',
    'items': 10,
    '$ref': 'users',
    'fields': [
      {"name": "title", "fake": faker.lorem.words()},
      {"name": "description", "fake": faker.lorem.sentence()},
      {"name": "status", "fake": faker.random.arrayElement([true, false])},
      {"name": "image", "fake": faker.image.imageUrl()},
      {"name": "videoPath", "fake": faker.image.nature()},
      {"name": "create_at", "fake": Date.now()}
    ]
  }
]


function ModelFake(models) {
  var _self = this;

  _self.gen = function(){
    
    var dataFake = {}
    var tempData = []

    for (var i = 0; i < entities.length; i++) {

      var obj = JSON.parse('{"' + entities[i].entity + '":{"status":"success","data":[]}}');
      var items = entities[i].items;

      for (var id = 0; id < items; id++) {

        for (var n = 0; n < entities[i].fields.length; n++) {
          var obj2 = JSON.parse('{"' + entities[i].fields[n].name + '":"'+ entities[i].fields[n].fake +'"}');
          console.log(obj2)
        }
      }

      tempData.push(obj)

    }

    var dataFake = Object.assign({}, tempData)

    return dataFake
  }


}

module.exports = function() {
  return new ModelFake()
}