
module.exports = {
  "name": "property_likes",
  "fields": [
    {
      "name": "userId",
      "faker": "faker.random.arrayElement(schema.users).id"
    },
    {
      "name": "propertyId",
      "faker": "faker.random.arrayElement(schema.properties).id"
    }
  ]
}