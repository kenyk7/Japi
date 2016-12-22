var faker = require('faker')

var usersList = require('./users')().list()
var videosList = require('./videos')().list()


function Comments() {
  var _self = this;

  _self.list = function(){
    var comments = {
      "status": "success",
      "data": []
    }

    for (var id = 1; id < 9; id++) {
      comments.data.push({
        "id": id,
        "body": faker.lorem.sentence(),
        "video": faker.random.arrayElement(videosList.data),
        "user": faker.random.arrayElement(usersList.data),
        "create_at": Date.now()
      })
    }

    return comments
  }

}

module.exports = function() {
  return new Comments();
}