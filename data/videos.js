
var faker = require('faker')

module.exports = function () {
  var videos = []

  for (var id = 0; id < 7; id++) {

    videos.push({
      "id": id,
      "title": faker.lorem.sentence(),
      "cover": faker.image.imageUrl(),
      "user": faker.name.firstName()
    })

  }

  return videos
}