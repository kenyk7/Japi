
var faker = require('faker')

var usersList = require('./users')().list(5)


function Videos() {
  var _self = this;

  _self.list = function(items){
    var videos = []

    for (var id = 1; id < items; id++) {
      videos.push({
        "id": id,
        "title": faker.lorem.words(),
        "description": faker.lorem.sentence(),
        "status": faker.random.arrayElement([true, false]),
        "image": faker.image.imageUrl(),
        "videoPath": faker.image.nature(),
        "create_at": Date.now(),
        "userId": faker.random.arrayElement(usersList).id
      })
    }

    return videos
  }


}

module.exports = function() {
  return new Videos();
}