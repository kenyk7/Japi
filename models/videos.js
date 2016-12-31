
module.exports = {
  "name": "videos",
  "fields": [
    {
      "name": "title",
      "faker":"faker.lorem.words()"
    },
    {
      "name": "description",
      "faker": "faker.lorem.sentence()"
    },
    {
      "name": "status",
      "faker": "faker.random.arrayElement([true, false])"
    },
    {
      "name": "image",
      "faker": "faker.image.imageUrl()"
    },
    {
      "name": "videoPath",
      "faker": "faker.image.nature()"
    },
    {
      "name": "create_at",
      "faker": "Date.now()"
    },
    {
      "name": "userId",
      "faker": "faker.random.arrayElement(schema.users).id"
    }
  ]
}