var faker = require('faker')

var usersList = require('./users')().list(5)
var videosList = require('./videos')().list(5)


function Comments() {
  var _self = this;

  _self.list = function(items){
    var comments = []

    for (var id = 1; id < items; id++) {
      comments.push({
        "id": id,
        "body": faker.lorem.sentence(),
        "create_at": Date.now(),
        "userId": faker.random.arrayElement(usersList).id,
        "videoId": faker.random.arrayElement(videosList).id
      })
    }

    return comments
  }

}

module.exports = function() {
  return new Comments();
}