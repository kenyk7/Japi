
var faker = require('faker')

var usersList = require('./users')().list()


function Videos() {
  var _self = this;

  _self.list = function(){
    var videos = {
      "status": "success",
      "data": []
    }

    for (var id = 1; id < 9; id++) {
      videos.data.push({
        "id": id,
        "title": faker.lorem.words(),
        "description": faker.lorem.sentence(),
        "status": faker.random.arrayElement([true, false]),
        "image": faker.image.imageUrl(),
        "videoPath": faker.image.nature(),
        "user": faker.random.arrayElement(usersList.data),
        "create_at": Date.now()
      })

    }

    return videos
  }


}

module.exports = function() {
  return new Videos();
}